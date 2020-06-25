import axios from "axios"

axios.interceptors.response.use(res => {
    console.log("这次请求的数据是：" + res.config.url)
    console.log(res)
    return res;
})

const baseUrl = "/api";

//首页
export const requestList = () => {
    return axios({
        url: baseUrl + "/list"
    })
}

//详情
export const requestDetail = (id) => {
    return axios({
        url: baseUrl + "/getDetail",
        params: {
            id
        }
    })
}