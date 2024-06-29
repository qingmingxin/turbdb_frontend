import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  LoginByCodeAPI,
  LoginByPwdAPI,
  LogoutAPI,
  PwdChangePAI,
} from '@/apis/user'

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref({})

    const getUserInfoByPwd = async ({ account, password }) => {
      const res = await LoginByPwdAPI({ account, password })
      userInfo.value = Object.assign({}, res)
      console.log(userInfo)
    }

    const getUserInfoByCode = async ({ account, code }) => {
      const res = await LoginByCodeAPI({ account, code })
      userInfo.value = res
    }

    const UserLogout = async () => {
      const username = userInfo.value.username
      await LogoutAPI(username)
      clearUserInfo()
    }

    const changePwd = async ({ pwd_old, pwd_new, pwd_re }) => {
      const user_id = userInfo.value.id
      await PwdChangePAI({ pwd_old, pwd_new, pwd_re, user_id })
    }

    const clearUserInfo = async () => {
      userInfo.value = {}
    }

    return {
      userInfo,
      getUserInfoByPwd,
      getUserInfoByCode,
      clearUserInfo,
      UserLogout,
      changePwd,
    }
  },
  {
    persist: true,
  }
)
