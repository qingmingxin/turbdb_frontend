<script setup>
import { ref } from 'vue'

const filePath = ref('')
const tableData = ref([
  { name: 'File 1', size: '1.5 MB', filenameTrue: true },
  { name: 'File 2', size: '2.3 GB', filenameTrue: false },
  { name: 'File 3', size: '550 KB', filenameTrue: true },
  { name: 'File 4', size: '3.1 GB', filenameTrue: false },
])

const handlerClick = (row) => {
  console.log('Clicked:', row.name)
  // Add your logic for handling click events for non-downloadable files
}

const downloadFile = (row) => {
  console.log('Downloading:', row.name)
  // Add your logic for downloading files
}
</script>

<template>
  <div class="download_page">
    <div class="download_page_title">Index of / {{ filePath }}</div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="File Name" />
      <el-table-column prop="size" label="Size" width="200" />
    </el-table>
    <!-- <el-table
      :data="tableData"
      style="width: 80%; font-size: 20px; margin-bottom: 25px"
      border
    >
      <el-table-column prop="name" label="Name" width="80%">
        <template v-slot="{ row }">
          <a v-if="!row.filenameTrue" href="#" @click="handlerClick(row)">{{
            row.name
          }}</a>
          <a v-else href="#" @click="downloadFile(row)">{{ row.name }}</a>
        </template>
      </el-table-column>
      <el-table-column prop="size" label="Size" width="20%">
        <template v-slot="{ row }">
          {{ row.size }}
        </template>
      </el-table-column>
    </el-table> -->
  </div>
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
