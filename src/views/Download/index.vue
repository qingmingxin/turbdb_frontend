<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import { useDatasetStore } from '@/stores/dataset'
const tableData1 = ref([
  { name: 'File 1', size: '1.5 MB', filenameTrue: true },
  { name: 'File 2', size: '2.3 GB', filenameTrue: false },
  { name: 'File 3', size: '550 KB', filenameTrue: true },
  { name: 'File 4', size: '3.1 GB', filenameTrue: false },
])

const tableData = ref([])
const cur_tableData = ref([])
const datasetList = ref([])
const useDataset = useDatasetStore()
const filePath = ref([])
const cur_dataset = ref('')

onMounted(async () => {
  await useDataset.getDatasetList()
  datasetList.value = useDataset.datasetList
  cur_dataset.value = datasetList.value[0]
  var res = await useDataset.getDatasetStruct(cur_dataset.value)
  tableData.value = res
  cur_tableData.value = res
  sortAndSetData(cur_tableData.value)
})

const handlerClick = (row) => {
  console.log('Clicked:', row.name)
  if (row.children) {
    cur_tableData.value = row.children
    filePath.value.push(row.label)
    sortAndSetData(row.children)
  } else {
    let file_path = filePath.value.join('/') + '/' + row.label
    console.log(file_path)
    console.log('click file')
  }
  // Add your logic for handling click events for non-downloadable files
}

const clearTable = () => {
  cur_tableData.value = []
  tableData.value = []
  filePath.value = []
}

const handlerClickDataset = async (dataset_name) => {
  clearTable()
  cur_dataset.value = dataset_name
  var res = await useDataset.getDatasetStruct(dataset_name)
  tableData.value = res
  cur_tableData.value = res
  sortAndSetData(cur_tableData.value)
  console.log(tableData.value)
}

const sortAndSetData = (data) => {
  cur_tableData.value = data.slice().sort((a, b) => {
    if (a.children && !b.children) return -1
    if (!a.children && b.children) return 1
  })
}

const downloadFile = (name) => {
  console.log('Downloading:', name)
  file_path = filePath.join('/') + name
  print(file_path)
  // Add your logic for downloading files
}

const updateCurTableData = () => {
  let current = tableData.value
  for (let i = 0; i < filePath.value.length; i++) {
    const path = filePath.value[i]
    const next = current.find((item) => item.label === path)
    if (next && next.children) {
      current = next.children
    } else {
      break
    }
  }
  cur_tableData.value = current
  sortAndSetData(cur_tableData.value)
}

const goBack = () => {
  if (filePath.value.length > 0) {
    filePath.value.pop()
    updateCurTableData()
  }
}
</script>

<template>
  <el-container class="download_page">
    <el-aside width="20%">
      <h2 style="text-align: left; padding-left: 20px">湍流数据集</h2>
      <el-menu
        default-active="/institute/nwpu"
        class="el-menu-vertical-demo"
        router
      >
        <el-menu-item
          class="el-menu-vertical-demo"
          v-for="(item, index) in datasetList"
          @click="handlerClickDataset(item)"
        >
          {{ item }}
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item>{{ cur_dataset }}</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(path, index) in filePath" :key="index">{{
          path
        }}</el-breadcrumb-item>
        <el-breadcrumb-item v-if="filePath.length > 0">
          <a @click="goBack" class="goBack_a">返回上一级</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider />
      <el-empty
        v-if="cur_tableData.length === 0"
        description="正在努力获取中..."
      />
      <el-table v-else :data="cur_tableData" style="width: 100%">
        <el-table-column prop="label" label="File Name">
          <template v-slot="{ row }">
            <a @click="handlerClick(row)">{{ row.label }}</a>
          </template>
        </el-table-column>
        <el-table-column prop="filesize" label="Size" width="200" />
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
  .el-menu-vertical-demo {
    border-right: none !important;
    font-size: $AsideMenuItemSize;
  }
  .el-table {
    width: 100%;
    margin-top: 30px;
  }
  .breadcrumb {
    font-size: $DownloadTitleFontSize;
  }
  .goBack_a:hover {
    color: aqua;
  }
}
</style>
