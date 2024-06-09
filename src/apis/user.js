import httpInstance from "@/utils/http";

var moduleName = '/users';

export function loginAPI({ username, password }) {
    return httpInstance({
        url: moduleName+'/login/',
        method: 'post',
        data: {
            username,
            password
        }
    })
}

export function updateToken({refresh}){
    return httpInstance({
        url:moduleName + '/token/refresh/',
        method:'post',
        data:{
            refresh
        }
    })
}


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

export function LogoutAPI() {
    return httpInstance({
        url: moduleName+'/logout/',
        method: 'post',
    })
}