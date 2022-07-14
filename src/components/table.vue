<template>
    <el-table :data="table" height="550px" stripe table-layout="auto">
        <el-table-column prop="time" label="Time" width="180" />
        <el-table-column prop="sender" label="Sender" width="180" />
        <el-table-column prop="message" label="Message" />
    </el-table>
</template>

<script lang="ts" setup>
const { table } = defineProps(['table'])
</script>