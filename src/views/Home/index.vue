<script setup>
import TitleView from './components/HomeTitle.vue'
import DatabaseView from './components/HomeDatabase.vue'
import HomeFooter from './components/HomeFooter.vue'
</script>

<template>
  <div class="home">
    <TitleView />
    <DatabaseView />
    <HomeFooter />
  </div>
</template>

<style scoped lang="scss">
.home {
  background-color: white;
}
</style>
