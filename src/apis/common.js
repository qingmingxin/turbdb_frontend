/**
 * @file 基础的公用接口
 */
import httpInstance from '@/utils/http.js'
import { metanodeInstance } from '@/utils/http.js'
export function getAllInstituteAPI() {
  return httpInstance({
    url: '/institute',
    headers: {
      requiresToken: false, // 根据参数决定是否需要 token
    },
  })
}
export function GetArticleListAPI() {
  return httpInstance({
    url: '/articles',
    headers: {
      requiresToken: false, // 根据参数决定是否需要 token
    },
  })
}

export function GetDatasetAPI() {
  return metanodeInstance({
    url: '/get_dataset/',
    headers: {
      requiresToken: false, // 根据参数决定是否需要 token
    },
  })
}

export function GetDatasetStructAPI({ dataset }) {
  return metanodeInstance({
    url: '/get_dataset_structrue/',
    method: 'get',
    params: {
      dataset,
    },
    headers: {
      requiresToken: false, // 根据参数决定是否需要 token
    },
  })
}
