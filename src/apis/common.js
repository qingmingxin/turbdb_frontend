/**
 * @file 基础的公用接口
 */
import httpInstance from '@/utils/http.js'

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
