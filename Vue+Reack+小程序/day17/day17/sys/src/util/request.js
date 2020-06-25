import axios from "axios"
import qs from "qs"
import { errorAlert } from "./alert"
import router from "../router"
//请求拦截
axios.interceptors.request.use(config => {
    if (config.method.toUpperCase() == "POST") {
        config.data = qs.stringify(config.data);
    }
    return config;
})

//响应拦截
axios.interceptors.response.use(res => {
    console.log("请求路径:" + res.config.url)
    console.log(res)

    //登录掉线了
    if(res.data.code==-1){
        errorAlert(res.data.info)
        router.push("/login")
        return null;
    }

    //请求失败的统一处理
    if (!res.data.isok) {//各种错误
        errorAlert(res.data.info)
        return null;
    }
    return res;
})
// const baseUrl = "/api"

const baseUrl = ""

//登录请求
export const requestLogin = (user) => {
    return axios({
        url: baseUrl + "/login",
        method: "post",
        data: user
    })
}

//查询管理员
export const requestFindManage = (data) => {
    return axios({
        url: baseUrl + "/findManage",
        method: "get",
        params: data
    })
}

//添加管理员
export const requestAddManage = (user) => {
    return axios({
        url: baseUrl + "/addManage",
        method: "get",
        params: user
    })
}
//更新管理员
export const requestUpdateManage = (user) => {
    return axios({
        url: baseUrl + "/updateManage",
        method: "get",
        params: user
    })
}
//删除管理员
export const requestDelManage = (id) => {
    return axios({
        url: baseUrl + "/delManage",
        method: "get",
        params: {
            id: id
        }
    })
}

//查询用户
export const requestFindUser = (data) => {
    return axios({
        url: baseUrl + "/findUser",
        method: "get",
        params: data
    })
}

//添加用户
export const requestAddUser = (user) => {
    return axios({
        url: baseUrl + "/addUser",
        method: "get",
        params: user
    })
}
//更新用户
export const requestUpdateUser = (user) => {
    return axios({
        url: baseUrl + "/updateUser",
        method: "get",
        params: user
    })
}
//删除用户
export const requestDelUser = (id) => {
    return axios({
        url: baseUrl + "/delUser",
        method: "get",
        params: {
            id: id
        }
    })
}

//查询通知
export const requestFindNews = (data) => {
    return axios({
        url: baseUrl + "/findNews",
        method: "get",
        params: data
    })
}

//添加通知
export const requestAddNews = (News) => {
    return axios({
        url: baseUrl + "/addNews",
        method: "get",
        params: News
    })
}
//更新通知
export const requestUpdateNews = (data) => {
    return axios({
        url: baseUrl + "/updateNews",
        method: "get",
        params: data
    })
}
//删除通知
export const requestDelNews = (id) => {
    return axios({
        url: baseUrl + "/delNews",
        method: "get",
        params: {
            id: id
        }
    })
}

//查询设备
export const requestFindDevice = (data) => {
    return axios({
        url: baseUrl + "/findDevice",
        method: "get",
        params: data
    })
}

//添加设备
export const requestAddDevice = (Device) => {
    return axios({
        url: baseUrl + "/addDevice",
        method: "get",
        params: Device
    })
}
//更新设备
export const requestUpdateDevice = (data) => {
    return axios({
        url: baseUrl + "/updateDevice",
        method: "get",
        params: data
    })
}
//删除设备
export const requestDelDevice = (id) => {
    return axios({
        url: baseUrl + "/delDevice",
        method: "get",
        params: {
            id: id
        }
    })
}

//退出
export const requestExit = () => {
    return axios({
        url: baseUrl + "/exit"
    })
}