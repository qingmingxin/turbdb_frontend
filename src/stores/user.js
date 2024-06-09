import { defineStore } from 'pinia'
import { ref } from 'vue'
import { LoginByCodeAPI, LoginByPwdAPI, LogoutAPI, loginAPI,updateToken } from "@/apis/user"

export const useUserStore = defineStore('user', () => {
    const userInfo = ref({})


    const Login = async ({ username, password }) => {
        const res = await loginAPI({ username, password })
        userInfo.value = Object.assign({}, res);
        const currentDate = new Date();
        const expireDate = new Date(currentDate.getTime() + 1000 * 60);
        userInfo.value.expireDate = expireDate.toISOString();
    }

    const getUserInfoByPwd = async ({ account, password }) => {
        const res = await loginAPI({ account, password })
        userInfo.value = Object.assign({}, res);
        console.log(userInfo)
    }

    const getUserInfoByCode = async ({ account, code }) => {
        const res = await LoginByCodeAPI({ account, code })
        userInfo.value = res

    }

    const UserUpdateToken = async ({refresh}) => {
        const res = await updateToken({refresh})
        const currentDate = new Date();
        const expireDate = new Date(currentDate.getTime() + 1000 * 60);
        userInfo.value.expireDate = expireDate.toISOString();
        userInfo.value.token = res.access;
    }

    const clearUserInfo = async () => {
        await LogoutAPI()
        userInfo.value = {}
    }

    return {
        userInfo,
        Login,
        getUserInfoByPwd,
        getUserInfoByCode,
        clearUserInfo,
        UserUpdateToken
    }
},
    {
        persist: true,
    })