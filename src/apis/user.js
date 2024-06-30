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
  })
}

export function GetUserInfoAPI({ user_id }) {
  return httpInstance({
    url: modelProfix + '/info/' + user_id,
    method: 'get',
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
  })
}

export function SendEmail({ email }) {
  return httpInstance({
    url: modelProfix + '/sendemail/',
    method: 'post',
    data: {
      email,
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
  })
}

export function LogoutAPI(account) {
  return httpInstance({
    url: modelProfix + '/logout/',
    method: 'post',
    data: {
      account: account,
    },
  })
}
