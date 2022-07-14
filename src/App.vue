<template>
  <github-corners blank="true" repo="akarachen/websocket-test" />
  <el-container>
    <el-header style="height:30px">
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside style="width:25%; padding-top: 20px;">
        <Aside />
      </el-aside>
      <el-main>
        <Main></Main>
      </el-main>
    </el-container>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script setup lang="ts">
import Footer from './components/footer.vue'
import Header from './components/header.vue'
import Aside from './components/aside.vue'
import Main from './components/main.vue'
</script>