<script setup>
import { ref } from 'vue'
import JobEditor from './components/JobEditor.vue'
import JobHistory from './components/JobHistory.vue'
const activeName = ref('editor')
const handleClick = (tab, event) => {
  console.log(tab, event)
}

</script>

<template>
  <div class="job-container">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="编辑代码" name="editor">
        <JobEditor />
      </el-tab-pane>
      <el-tab-pane label="历史提交" name="history">
        <JobHistory />
      </el-tab-pane>
    </el-tabs>
    <!-- <el-menu class="job-menu" default-active="/job/editor" mode="horizontal" router>
            <el-menu-item index="/job/editor" @click="handleMenuClick('/job/editor')">
                编辑代码
            </el-menu-item>
            <el-menu-item index="/job/history" @click="handleMenuClick('/job/history')">
                历史提交
            </el-menu-item>
        </el-menu>
        <router-view></router-view> -->
  </div>
</template>

<style scoped>
.job-container {
  width: 90%;
  display: fixed;
  margin: auto;
  text-align: center;

  .demo-tabs {
    text-align: center;
    padding: 10px 0;
    .el-tabs-nav {
      justify-content: center;
    }
  }
}
</style>
