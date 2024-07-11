<script setup>
import { ref } from 'vue'

const databaseItems = ref([
  {
    imgSrc: 'src/views/Home/images/m.png',
    title: '民机翼型/机翼湍流数据库',
    description: '包含超/高超声速平板、钝锥、压缩拐角的DNS与实验数据',
    router_url: '/database/m',
  },
  {
    imgSrc: 'src/views/Home/images/hyp.png',
    title: '高超声速飞行器标模湍流数据',
    description: '包含超/高超声速平板、钝锥、压缩拐角的DNS与实验数据',
    router_url: '/database/hyp',
  },
  {
    imgSrc: 'src/views/Home/images/hk.png',
    title: '航空发动机典型部件湍流数据',
    description: '包含超/高超声速平板、钝锥、压缩拐角的DNS与实验数据',
    router_url: '/database/hk',
  },
])
</script>

<template>
  <div class="databases-container">
    <el-row :gutter="20" justify="center" class="row">
      <el-col :span="7" v-for="(item, index) in databaseItems" :key="index">
        <el-card shadow="hover" :body-style="{ padding: '20px 0 0 0' }">
          <img :src="item.imgSrc" class="image" />
          <div class="database_title">{{ item.title }}</div>
          <div class="detail">
            <span>{{ item.description }}</span>
          </div>
          <el-divider />
          <RouterLink :to="item.router_url"
            ><el-button text class="button">查看详情</el-button></RouterLink
          >
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.databases-container {
  text-align: center;
  margin: auto;
  width: 80%;
  display: flex;
  flex-direction: column;

  .row {
    flex: 0.9;
    align-items: center;
  }

  .el-card {
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: translateY(-5px);
    }
    .database_title {
      font-size: $HomeDatabaseTitleFontSize;
      font-weight: bold;
    }

    .detail {
      padding: 10px 30px;
    }

    .el-divider {
      margin: 24px 0 0 0;
    }

    span {
      color: #99a9bf;
    }

    .button {
      height: 50px;
      width: 100%;
      padding: 0;
      margin: 0;
      color: $xtxColor;
      text-align: center;
      font-size: $HomeDatabaseButtonFontSize;

      &:hover {
        background-color: $xtxColor;
        color: white;
      }
    }
  }
}
</style>
