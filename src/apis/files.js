/**
 * @file 文件操作相关接口
 */

import httpInstance from '@/utils/http.js'

export function GetFileFromWebAPI(filename) {
  return httpInstance({
    url: '/file/images/?filename=' + filename,
    method: 'get',
    responseType: 'arraybuffer', // 最为关键
    headers: {
      requiresToken: true, // 根据参数决定是否需要 token
    },
  })
}
