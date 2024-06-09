import httpInstance from "@/utils/http.js";

export function getTitleAPI(){
    return httpInstance({
        url:'/title',
    })
}

export function getAllInstituteAPI(){
    return httpInstance({
        url:'/institute',
    })
}