import { requestFindUser } from "../../util/request"
const state = {
    list: [],//用户列表
    isRequest: true,//发不发请求的判断
}

const mutations = {
    //修改list
    changeList(state, arr) {
        state.list = arr;
    },
    //修改isRequest
    changeIsRequest(state, bool) {
        state.isRequest = bool
    }
}

const actions = {
    //发请求的任务
    requestFindUserAction(context) {
        //如果请求过了list，就不再请求数据了
        if (context.state.isRequest) {
            requestFindUser({}).then(res => {
                //发完请求，就把开关关上
                context.commit("changeIsRequest", false)
                //成功的时候修改list
                if (res) {
                    context.commit("changeList", res.data.data)
                }
            })
        }

    },
    //页面修改isRequest 
    changeIsRequestAction(context, bool) {
        context.commit("changeIsRequest", bool)
    }
}

const getters = {
    list(state) {
        return state.list
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}