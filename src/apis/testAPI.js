import httpInstance from "@/utils/http";

export function test(){
    return httpInstance({
        url:'home/category/head'
    })
}