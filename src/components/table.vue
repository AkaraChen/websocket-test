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
        <el-table-column prop="message" label="Message" :show-overflow-tooltip="true" />
        <el-table-column label="Action">
            <template #default="scope">
                <el_button :icon="Search" circle @click="dialogVisible = true" />
                <el-button :icon="Delete" circle @click="store.remove(scope.row.id)" />
            </template>
        </el-table-column>
    </el-table>
    <el-dialog v-model="dialogVisible" title="Tips" width="30%">
        <span>This is a message</span>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { Delete, Search } from '@element-plus/icons-vue'
import { useMainStore } from '../store/main';
import { ref } from 'vue';

const { table } = defineProps(['table'])
const store = useMainStore()
const dialogVisible = ref(false)
const dialogMessage = ref('')
</script>

<style>
.el-form-item {
    margin-bottom: 12px;
}
</style>