/**
 * @file 基础的公用接口
 */
import httpInstance from '@/utils/http.js'
import { metanodeInstance } from '@/utils/http.js'
export function getAllInstituteAPI() {
  return httpInstance({
    url: '/institute',
  })
}
export function GetArticleListAPI() {
  return httpInstance({
    url: '/articles',
  })
}

export function GetDatasetAPI() {
  return metanodeInstance({
    url: '/get_dataset',
  })
}

export function GetDatasetStructAPI() {
  return metanodeInstance({
    url: '/get_dataset_structrue',
  })
}
