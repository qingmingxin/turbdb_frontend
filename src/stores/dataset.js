import { defineStore } from 'pinia'
import { ref } from 'vue'
import { GetDatasetAPI, GetDatasetStructAPI } from '../apis/common'

export const useDatasetStore = defineStore(
  'dataset',
  () => {
    const datasetList = ref([])
    const datasetStruct = ref([])

    const getDatasetList = async () => {
      const res = await GetDatasetAPI()
      datasetList.value = res
    }

    const getDatasetStruct = async () => {
      const res = await GetDatasetStructAPI()
      datasetStruct = res
    }

    return {
      datasetList,
      datasetStruct,
      getDatasetList,
      getDatasetStruct,
    }
  },

  {
    persist: true,
  }
)
