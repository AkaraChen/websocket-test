<template>
    <div class="header">
        <el-icon :size="24">
            <Guide />
        </el-icon>
        <span>
            Websocket Tester
        </span>
    </div>

</template>

<style scoped>
.header span {
    vertical-align: top;
    font-size: 20px;

}
</style>

<script lang="ts" setup>
import { Guide } from '@element-plus/icons-vue';
</script>