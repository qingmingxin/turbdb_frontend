import httpInstance from '@/utils/http.js'

export function GetFileAPI(filename) {
  return httpInstance({
    url: '/file/images/?filename=' + filename,
    method: 'get',
    responseType: 'arraybuffer', // 最为关键
  })
}
