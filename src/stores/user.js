/**
 * @file 用户store
 */

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
  RegisterAPI,
} from '@/apis/user'

import { GetFileFromWebAPI } from '@/apis/files'

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref({})
    const userItemList = ref({})
    const userLoginByPwd = async ({ account, password }) => {
      const res = await LoginByPwdAPI({ account, password })
      userInfo.value = Object.assign({}, res)
      await userGetInfo()
      console.log(userInfo)
    }

    const userRegister = async ({
      username,
      email,
      password,
      re_password,
      code,
      codeID,
    }) => {
      const res = await RegisterAPI({
        username,
        email,
        password,
        re_password,
        code,
        codeID,
      })
      console.log('ceshi')
      if (res) {
        console.log('ceshi1')
        await userLoginByPwd({ account: res.username, password: res.password })
      }
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
        if (ret[key]['is_list']) {
          userItemList.value[key] = {
            label: ret[key]['verbose_name'],
            is_modify: ret[key]['is_modify'],
          }
        }
        userInfo.value[key] = ret[key]['value']
      }
    }

    const getUserAvatar = async () => {
      var avatar = userInfo.value['avatar']
      var ret = await GetFileFromWebAPI(avatar)
      let blob = new Blob([ret]) // 返回的文件流数据
      return window.URL.createObjectURL(blob) // 将他转化为路径
    }

    const updateUserInfo = async (data) => {
      var user_id = userInfo.value.id
      var ret = await UpdateUserInfoAPI({ data, user_id })
      return ret
    }

    const changePwd = async ({ pwd_old, pwd_new, pwd_re }) => {
      const user_id = userInfo.value.id
      var ret = await PwdChangeAPI({ pwd_old, pwd_new, pwd_re, user_id })
      return ret
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
      getUserAvatar,
      userRegister,
    }
  },
  {
    persist: true,
  }
)
