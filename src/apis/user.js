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

// TODO:待完善
export function PwdChangePAI({ pwd_old, pwd_new, pwd_re, user_id }) {
  console.log(user_id)
  console.log(pwd_old)
  console.log(pwd_new)
  console.log(pwd_re)
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

export function LogoutAPI(account) {
  return httpInstance({
    url: modelProfix + '/logout/',
    method: 'post',
    data: {
      account: account,
    },
  })
}
