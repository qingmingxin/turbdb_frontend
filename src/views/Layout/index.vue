<script setup>
import LayoutNav from '@/views/Layout/components/LayoutNav.vue'

</script>

<template>
  <div class="layout-container">
    <LayoutNav />
    <el-scrollbar>
      <RouterView />
    </el-scrollbar>
  </div>
</template>

<style lang="scss">
.layout-container{
  height: 100vh;
  .el-scrollbar{
    max-height: calc(100vh - 70px);
  }
}
</style>