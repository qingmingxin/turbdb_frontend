import httpInstance from "@/utils/http.js";


export function getAllInstituteAPI(){
    return httpInstance({
        url:'/institute',
    })
}