import axios from 'axios'
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'

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
    }
    return Promise.reject(e)
  }
)

export default httpInstance
