import httpInstance from "@/utils/http";


var modelProfix = '/users';



export function LoginByPwdAPI({ account, password }) {
    return httpInstance({
        url: modelProfix + '/login/',
        method: 'post',
        data: {
            "username":account,
            password
        }
    })
}

export function LoginByCodeAPI({ account, code }) {
    return httpInstance({
        url: '/login/',
        method: 'post',
        data: {
            account,
            code
        }
    })
}

export function LogoutAPI(account) {
    return httpInstance({
        url: '/logout/',
        method: 'post',
        data: {
            "account": account
        }
    })
}