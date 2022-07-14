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
                <el-button :icon="Delete" circle @click="store.remove(scope.row.id)" />
            </template>
        </el-table-column>
    </el-table>
</template>

<script lang="ts" setup>
import {
    Delete,
    Search,
} from '@element-plus/icons-vue'
import { useMainStore } from '../store/main';

const { table } = defineProps(['table'])
const store = useMainStore()
</script>