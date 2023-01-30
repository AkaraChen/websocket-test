<template>
    <el-table :data="table" height="550px" stripe table-layout="auto">
        <el-table-column prop="time" label="Time" />
        <el-table-column label="Sender">
            <template #default="scope">
                <el-tag :type="scope.row.sender === 'client' ? '' : 'success'" disable-transitions>
                    {{ scope.row.sender }}
                </el-tag>
            </template>
        </el-table-column>
        <el-table-column prop="message" label="Message">
            <template #default="scope">
                <p style="width: 300px;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                    {{ scope.row.message }}
                </p>
            </template>
        </el-table-column>
        <el-table-column label="Action">
            <template #default="scope">
                <el-button :icon="Search" circle @click="dialogVisible = true; dialogMessage = scope.row.message" />
                <el-button :icon="Delete" circle @click="store.remove(scope.row.id)" />
            </template>
        </el-table-column>
    </el-table>
    <el-dialog v-model="dialogVisible" title="Message" width="50%">
        <div class="editor" ref="editorRef"></div>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { nextTick, ref, watch } from 'vue';
import { Delete, Search } from '@element-plus/icons-vue'
import { useMainStore } from '../store/main';
import * as monaco from 'monaco-editor';

const dialogVisible = ref(false)
const dialogMessage = ref('')
const { table } = defineProps(['table'])
const store = useMainStore()
const editorRef = ref(null)
let instance: monaco.editor.IStandaloneCodeEditor
watch(dialogVisible, () => {
    if (dialogVisible.value) {
        nextTick(() => {
            if (!instance) {
                instance = monaco.editor.create(editorRef.value!, {
                    fontLigatures: true,
                    fontSize: 14
                })
            }
            instance!.setValue(dialogMessage.value)
        })
    }
})
</script>

<style>
.el-form-item {
    margin-bottom: 12px;
}

.editor {
    height: 300px;
}
</style>