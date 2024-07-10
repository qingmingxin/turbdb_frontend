<script setup>
import { ref, onBeforeMount } from 'vue'
import { GetArticleListAPI } from '@/apis/common'

onBeforeMount(async () => {
  var ret = await GetArticleListAPI()
  articleList.value = ret
  console.log(ret)
})

const articleList = ref([])
</script>

<template>
  <el-empty v-if="articleList" description="服务器连接失败" />
  <div v-else class="card-container">
    <el-row :gutter="20" justify="center">
      <el-col
        :span="16"
        v-for="(item, index) in articleList"
        :key="index"
        class="card-column"
      >
        <el-card class="hover-card">
          <h3>{{ item.title }}</h3>
          <div class="card-content">
            <span class="author">{{ item.authors }}</span>
            <span class="journal">{{ item.source }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
}

.el-row {
  width: 70%;
}
.card-column {
  padding-bottom: 20px;
}
.card-content {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.author {
  font-weight: bold;
}

.journal {
  color: #999;
}
.hover-card {
  transition: transform 0.3s ease;
}

.hover-card:hover {
  transform: scale(1.05);
}
</style>
