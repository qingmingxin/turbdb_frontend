<script setup>
import LayoutNav from '@/views/Layout/components/LayoutNav.vue'
import HomeFooter from './components/LayoutFooter.vue'
</script>

<template>
  <div class="layout-container">
    <LayoutNav />
    <div class="main-content">
      <RouterView class="main-view" />
    </div>
    <HomeFooter class="footer-view" />
  </div>
</template>

<style scoped lang="scss">
.layout-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.main-content {
  flex: 1; /* 占据剩余空间 */
  overflow-y: auto; /* 当内容溢出且滚动时显示滚动条 */
  padding-bottom: 40px;
}
.main-view {
  min-height: 100%;
}
.footer-view {
  flex-shrink: 0; /* 防止页脚被内容撑开 */
  position: fixed; /* 固定在底部 */
  bottom: 0;
  width: 100%;
}
</style>
