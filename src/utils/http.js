import axios from "axios"
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'

const httpInstance = axios.create({
    baseURL: "/api",
    // baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
    timeout: 5000
})


// axios请求拦截器
httpInstance.interceptors.request.use(async config => {
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
        // console.log(userStore.userInfo.expireDate);
        // const expirationDate = new Date(userStore.userInfo.expireDate);
        // const currentDate = new Date();
        // if (expirationDate > currentDate) {
        //     // Token 有效，将 token 添加到请求头中
        //     config.headers.Authorization = `Bearer ${token}`;
        // } else {
        //     console.log("token过期");
        //     console.log(userStore.userInfo.refresh);
        //     await userStore.UserUpdateToken({"refresh":userStore.userInfo.refresh});
        // }
    }
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use( (res) => {
    console.log(res); // 打印完整的响应对象
    return res.data;
  },async (e) => {
    const userStore = useUserStore();
    if(e.response.data.code === "token_not_valid"){
        await userStore.UserUpdateToken({"refresh":userStore.userInfo.refresh});
        const newToken = userStore.userInfo.token;
        console.log(newToken);
        // 获取当前失败的请求
        const response = e.response;
        // 重置一下配置
        response.headers.Authorization = `Bearer ${newToken}`; // 注意根据实际情况调整header键名
        response.baseURL = '' // url已经带上了/api，避免出现/api/api的情况
        // 重试当前请求并返回promise
        return axios.request(response.config);
    } else {
        ElMessage({ type: 'warning', message: e.response.data.msg });
        return Promise.reject(e);
    }
  })

export default httpInstance