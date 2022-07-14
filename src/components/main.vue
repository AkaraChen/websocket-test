<template>
    <github-corners blank="true" repo="akarachen/websocket-test" />
    <el-tabs type="border-card">
        <el-tab-pane label="All">
            <Table :table="table"></Table>
        </el-tab-pane>
        <el-tab-pane label="Client">
            <Table :table="client"></Table>
        </el-tab-pane>
        <el-tab-pane label="User">
            <Table :table="user"></Table>
        </el-tab-pane>
    </el-tabs>

</template>

<script lang="ts" setup>
import { useMainStore } from '../store/main'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import Table from './table.vue'

const { table } = storeToRefs(useMainStore())
const client = computed(() => table.value.filter(item => item.sender === 'client'))
const user = computed(() => table.value.filter(item => item.sender === 'user'))
</script>