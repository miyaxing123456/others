import axios from "axios"
axios.interceptors.response.use(res => {
    console.log("请求地址：" + res.config.url)
    console.log(res)
    return res;
})
const baseUrl = "/api";

//登录
export const requestLogin = (user) => {
    return axios({
        url: baseUrl + "/login",
        method:"get",
        params:user
    })
}

//获取详情
export const requestDetail=()=>{
    return axios({
        url:baseUrl+"/getDetails",
        method:"get",
        params:{
            pid:"00001"
        }
    })
}