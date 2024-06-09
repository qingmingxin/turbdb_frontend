<script setup>
import {  ref } from 'vue'
import { ElConfigProvider } from 'element-plus'

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const locale = ref(zhCn)

</script>

<template>
  <el-config-provider :locale="locale">
    <RouterView />
  </el-config-provider>
  <!-- 一级路由出口组件 -->
</template>

<style scoped lang="scss"></style>
