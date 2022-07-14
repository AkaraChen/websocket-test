<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useMainStore } from '../store/main';
import { computed } from 'vue';
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

const { isConnect } = storeToRefs(useMainStore())
const host = ref('localhost')
const port = ref('8080')
const endpoint = ref('')
const param = ref('')
const uri = computed(() => `ws://${host.value}:${port.value}/${endpoint.value}?${param.value}`)
const textarea = ref('')
const store = useMainStore()
const getTimeString = (): string => {
    const date = new Date()
    return `${date.getHours()}:${date.getHours()}:${date.getSeconds()}`
}

let ws: WebSocket
const connect = () => {
    ElMessage({
        message: 'Link started!',
        type: 'success'
    })
    isConnect.value = true
    let success = true
    ws = new WebSocket(uri.value)
    ws.onmessage = event => {
        store.addData({ message: event.data, time: getTimeString(), sender: 'client' })
    }
    ws.onerror = () => {
        ElMessage({
            message: `Unknown Error`,
            type: 'error'
        })
        success = false
    }
    ws.onclose = function (event) {
        isConnect.value = false
        if (success) {
            if (event.wasClean) {
                ElMessage({
                    message: `Connection closed cleanly`,
                    type: 'success'
                })
            } else {
                ElMessage({
                    message: `Connection died`,
                    type: 'warning'
                })
            }
        }
    };
}
const disConnect = () => {
    isConnect.value = false
    ws.close()
}

const send = () => {
    ws.send(textarea.value)
    store.addData({ message: textarea.value, time: getTimeString(), sender: 'user' })
}
</script>

<template>
    <el-card shadow="never">
        <el-form label-position="top">
            <el-form-item label="Host">
                <el-input v-model="host" />
            </el-form-item>
            <el-form-item label="Port">
                <el-input v-model="port" />
            </el-form-item>
            <el-form-item label="Endpoint">
                <el-input v-model="endpoint" />
            </el-form-item>
            <el-form-item label="Param">
                <el-input v-model="param" />
            </el-form-item>
        </el-form>
        <el-row>
            <el-button type="primary" @click="connect" :disabled="isConnect">Connect</el-button>
            <el-button type="danger" @click="disConnect" :disabled="!isConnect">Disconnect</el-button>
        </el-row>
    </el-card>
    <el-card style="margin-top: 20px" shadow="never">
        <div>
            <el-input :disabled="!isConnect" v-model="textarea" :rows="2" type="textarea" placeholder="Please input" />
            <el-button @click="send" style="margin-top:10px" :disabled="!isConnect" type="primary">Send</el-button>
        </div>
    </el-card>
</template>