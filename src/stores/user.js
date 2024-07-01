import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  LoginByCodeAPI,
  LoginByPwdAPI,
  LogoutAPI,
  PwdChangeAPI,
  GetUserInfoAPI,
  UpdateUserInfoAPI,
  SendEmail,
  VerifyCodeAPI,
} from '@/apis/user'

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref({})
    const userItemList = ref({})
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
      for (var key in ret) {
        userItemList.value[key] = {
          label: ret[key]['verbose_name'],
          is_modify: ret[key]['is_modify'],
        }
        userInfo.value[key] = ret[key]['value']
      }
    }

    const updateUserInfo = async (data) => {
      var user_id = userInfo.value.id
      var ret = await UpdateUserInfoAPI({ data, user_id })
      var msg = ret.msg
      return ret
    }

    const changePwd = async ({ pwd_old, pwd_new, pwd_re }) => {
      const user_id = userInfo.value.id
      await PwdChangeAPI({ pwd_old, pwd_new, pwd_re, user_id })
    }

    const getEmailCode = async ({ email }) => {
      var ret = await SendEmail({ email })
      console.log(ret.codeID)
      return ret.codeID
    }

    const UserVerifyCode = async ({ email, code, codeID }) => {
      var ret = await VerifyCodeAPI({ email, code, codeID })
      console.log(ret)
      if (ret.msg) {
        return true
      }
      return false
    }

    const clearUserInfo = async () => {
      userInfo.value = {}
    }

    return {
      userInfo,
      userItemList,
      userLoginByPwd,
      getUserInfoByCode,
      clearUserInfo,
      UserLogout,
      changePwd,
      userGetInfo,
      updateUserInfo,
      getEmailCode,
      UserVerifyCode,
    }
  },
  {
    persist: true,
  }
)
