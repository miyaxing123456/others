//所有的数据请求的事情
import axios from "axios"

//开发要写
const baseUrl = "/api"

//打包
// const baseUrl = "";

//登录请求
export const requestLogin = (data) => {
    return axios({
        url: baseUrl + "/login",
        method: "post",
        data: data,
    })
}
//电影列表
export const requestMovie = () => {
    return axios({
        url: baseUrl + "/getMovie"
    })
}
//电影详情
export const requestMovieDetail = (id) => {
    return axios({
        url: baseUrl + "/getDetail",
        method: "get",
        params: {
            id: id
        }
    })
}

export const x = 10;