import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  LoginByCodeAPI,
  LoginByPwdAPI,
  LogoutAPI,
  PwdChangeAPI,
  GetUserInfoAPI,
} from '@/apis/user'

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref({})

    const userLoginByPwd = async ({ account, password }) => {
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

    const userGetInfo = async () => {
      var user_id = userInfo.value.id
      const ret = await GetUserInfoAPI({ user_id })
      console.log(ret)
    }

    const changePwd = async ({ pwd_old, pwd_new, pwd_re }) => {
      const user_id = userInfo.value.id
      await PwdChangeAPI({ pwd_old, pwd_new, pwd_re, user_id })
    }

    const clearUserInfo = async () => {
      userInfo.value = {}
    }

    return {
      userInfo,
      userLoginByPwd,
      getUserInfoByCode,
      clearUserInfo,
      UserLogout,
      changePwd,
      userGetInfo,
    }
  },
  {
    persist: true,
  }
)
