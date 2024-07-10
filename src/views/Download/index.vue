<script setup>
import { ref } from 'vue'

const filePath = ref('')
const tableData1 = ref([
  { name: 'File 1', size: '1.5 MB', filenameTrue: true },
  { name: 'File 2', size: '2.3 GB', filenameTrue: false },
  { name: 'File 3', size: '550 KB', filenameTrue: true },
  { name: 'File 4', size: '3.1 GB', filenameTrue: false },
])

const tableData = ref([])
const datasetList = ref(['1', '2', '3'])

const handlerClick = (row) => {
  console.log('Clicked:', row.name)
  // Add your logic for handling click events for non-downloadable files
}

const handlerClickDataset = (dataset) => {
  console.log('Clicked:', dataset)
}

const downloadFile = (row) => {
  console.log('Downloading:', row.name)
  // Add your logic for downloading files
}
</script>

<template>
  <el-container class="download_page">
    <el-aside width="20%">
      <h2 style="text-align: left; padding-left: 20px">研究机构</h2>
      <el-menu
        default-active="/institute/nwpu"
        class="el-menu-vertical-demo"
        router
      >
        <el-menu-item
          v-for="(item, index) in datasetList"
          @click="handlerClickDataset(item)"
        >
          {{ item }}
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <div class="download_page_title">Index of / {{ filePath }}</div>
      <el-empty v-if="tableData" description="服务器连接失败" />
      <el-table v-else :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="File Name" />
        <el-table-column prop="size" label="Size" width="200" />
      </el-table>
    </el-main>
  </el-container>
</template>

<style scoped lang="scss">
.download_page {
  padding-top: 60px;
  width: 70%;
  margin: auto;
  .download_page_title {
    font-size: 20px;
    font-weight: 750;
  }
  .el-table {
    width: 100%;
    margin-top: 30px;
  }
}
</style>
