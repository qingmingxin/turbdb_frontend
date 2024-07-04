<script setup>
import { ref, onMounted } from 'vue'
</script>

<template>
  <div class="query_page">
    <div class="query_page_title">湍流数据库查询</div>

    <div>
      <el-row class="query_page_content">
        <el-col :span="18">
          <el-form class="query_page_content_left">2</el-form>
        </el-col>
        <el-col :span="6">
          <div class="query_page_content_right">1</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss">
.query_page {
  padding-top: 20px;
  width: 70%;
  margin: 0 auto;

  .query_page_title {
    font-size: 40px;
    font-weight: bold;
    text-align: center;
  }

  .query_page_content {
    margin-top: 20px;
    height: 100%;

    .query_page_content_right {
      background-color: #b3b3b3;
    }
  }
}
</style>
