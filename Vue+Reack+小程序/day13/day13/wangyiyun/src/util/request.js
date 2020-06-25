import axios from "axios"

//响应拦截
axios.interceptors.response.use(res => {
    console.log("这次请求的接口地址是：" + res.config.url)
    console.log(res);
    return res;
})

const baseUrl = "/api"

//发送验证码请求
export const requestSendCode = (tel) => {
    return axios({
        url: baseUrl + "/captcha/sent",
        method: "get",
        params: {
            phone: tel
        }
    })
}

//验证验证码请求
export const requestVerifyCode = (phone, captcha) => {
    return axios({
        url: baseUrl + "/captcha/verify",
        method: "get",
        params: {
            phone,
            captcha
        }
    })
}

//推荐歌单的请求
export const requestTuijian = () => {
    return axios({
        url: baseUrl + "/personalized"
    })
}

//歌单详情
export const requestList = (id) => {
    return axios({
        url: baseUrl + "/playlist/detail",
        params: {
            id: id
        }
    })
}

//歌曲评论
export const requestComment = (id) => {
    return axios({
        url: baseUrl + "/comment/music",
        method: "get",
        params: {
            id
        }
    })
}


//获取所有榜单
export const requestTopList = () => {
    return axios({
        url: baseUrl + "/toplist/detail"
    })
}

//获取热搜
export const requestHot = () => {
    return axios({
        url: baseUrl + "/search/hot"
    })
}