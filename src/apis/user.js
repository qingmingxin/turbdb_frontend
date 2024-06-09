import httpInstance from "@/utils/http";


export function LoginByPwdAPI({ account, password }) {
    return httpInstance({
        url: '/login/',
        method: 'post',
        data: {
            account,
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