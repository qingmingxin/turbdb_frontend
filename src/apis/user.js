/**
 * @file 用户相关接口
 */

import httpInstance from '@/utils/http'

var modelProfix = '/users'

export function LoginByPwdAPI({ account, password }) {
  return httpInstance({
    url: modelProfix + '/login/',
    method: 'post',
    data: {
      username: account,
      password,
    },
    headers: {
      requiresToken: true, // 根据参数决定是否需要 token
    },
  })
}

export function RegisterAPI({
  username,
  email,
  password,
  re_password,
  code,
  codeID,
}) {
  return httpInstance({
    url: modelProfix + '/register/',
    method: 'post',
    data: {
      username,
      email,
      password,
      re_password,
      code,
      codeID,
    },
    headers: {
      requiresToken: true, // 根据参数决定是否需要 token
    },
  })
}

export function LoginByCodeAPI({ account, code }) {
  return httpInstance({
    url: '/login/',
    method: 'post',
    data: {
      account,
      code,
    },
    headers: {
      requiresToken: true, // 根据参数决定是否需要 token
    },
  })
}

export function PwdChangeAPI({ pwd_old, pwd_new, pwd_re, user_id }) {
  return httpInstance({
    url: modelProfix + '/pwd_change/' + user_id,
    method: 'put',
    data: {
      pwd_old,
      pwd_new,
      pwd_re,
    },
    headers: {
      requiresToken: true, // 根据参数决定是否需要 token
    },
  })
}

export function GetUserInfoAPI({ user_id }) {
  return httpInstance({
    url: modelProfix + '/info/' + user_id,
    method: 'get',
    headers: {
      requiresToken: true, // 根据参数决定是否需要 token
    },
  })
}

export function VerifyCodeAPI({ email, code, codeID }) {
  return httpInstance({
    url: modelProfix + '/verify_code/',
    method: 'post',
    data: {
      email,
      code,
      codeID,
    },
    headers: {
      requiresToken: true, // 根据参数决定是否需要 token
    },
  })
}

export function SendEmail({ email }) {
  return httpInstance({
    url: modelProfix + '/sendemail/',
    method: 'post',
    data: {
      email,
    },
    headers: {
      requiresToken: true, // 根据参数决定是否需要 token
    },
  })
}

export function UpdateUserInfoAPI({ data, user_id }) {
  return httpInstance({
    url: modelProfix + '/update/' + user_id,
    method: 'put',
    data: {
      data,
    },
    headers: {
      requiresToken: true, // 根据参数决定是否需要 token
    },
  })
}

export function LogoutAPI(account) {
  return httpInstance({
    url: modelProfix + '/logout/',
    method: 'post',
    data: {
      account: account,
    },
    headers: {
      requiresToken: true, // 根据参数决定是否需要 token
    },
  })
}
