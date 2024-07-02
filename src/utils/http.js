import axios from 'axios'
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const httpInstance = axios.create({
  baseURL: '/api',
  // baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000,
})

// axios请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (e) => Promise.reject(e)
)

// axios响应式拦截器
httpInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    // ElMessage({type:'warning',message:e.response.data.msg})
    if (e.response.data.code === 'token_not_valid') {
      ElMessage({
        type: 'error',
        message: 'Token过期，请重新登录',
        duration: 5000,
      })
      const userStore = useUserStore()
      userStore.clearUserInfo()
      const router = useRouter()
      router.push('/')
    } else if (e.config.url.indexOf('sendemail') != -1) {
      console.log(e.config.url.indexOf('sendemail'))
      if (e.response.data.error === '"邮箱不能重复绑定多个用户"') {
        ElMessage({
          type: 'error',
          message: '该邮箱已被使用',
          duration: 5000,
        })
      } else {
        ElMessage({
          type: 'error',
          message: '获取失败，请重新获取',
          duration: 5000,
        })
      }
    } else if (e.config.url.indexOf('verify') != -1) {
      if (e.response.data.error === '"邮箱不能重复绑定多个用户"') {
        ElMessage({
          type: 'error',
          message: '该邮箱已被使用',
          duration: 5000,
        })
      } else {
        ElMessage({
          type: 'error',
          message: '验证码错误',
          duration: 5000,
        })
      }
    } else {
      console.log(e)
      var url = e.config.url
      console.log(url)
      ElMessage({
        type: 'error',
        message: e.response.data['error'],
        duration: 5000,
      })
    }
    return Promise.reject(e)
  }
)

export default httpInstance
