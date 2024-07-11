import { defineStore } from 'pinia'
import { ref } from 'vue'
import { GetDatasetAPI, GetDatasetStructAPI } from '../apis/common'

export const useDatasetStore = defineStore(
  'dataset',
  () => {
    const datasetList = ref([])
    const node = ref('')

    const getDatasetList = async () => {
      const res = await GetDatasetAPI()
      datasetList.value = res.data
      return res.data
    }

    const getDatasetStruct = async (dataset_va) => {
      const res = await GetDatasetStructAPI({ dataset: dataset_va })
      console.log(res.data)
      node.value = res.data['node']
      return res.data['json_data']['data']
      // datasetStruct = res.data
    }

    return {
      datasetList,
      getDatasetList,
      getDatasetStruct,
    }
  },

  {
    persist: true,
  }
)
