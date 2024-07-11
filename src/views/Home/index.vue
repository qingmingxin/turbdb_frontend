<script setup>
import TitleView from './components/HomeTitle.vue'
import DatabaseView from './components/HomeDatabase.vue'
</script>

<template>
  <div class="home">
    <TitleView class="title-view" />
    <DatabaseView class="database-view" />
  </div>
</template>

<style scoped lang="scss">
.home {
  background-color: white;
  display: flex;
  flex-direction: column;

  .title-view {
    flex: 1;
    height: 100%;
  }

  .database-view {
    flex: 2;
  }
}
</style>
