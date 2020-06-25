import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import { requestList, requestDetail } from "../util/request"

//状态
const state = {
    //首页数据
    list: [],
    //详情数据
    detail: {},
    //收藏数据
    collections: [
        // { id: "", title: "", con: "" },
        // { id: "", title: "", con: "" },
    ],
}

//修改状态
const mutations = {
    //修改list
    changeList(state, arr) {
        state.list = arr;
    },
    //修改详情
    changeDetail(state, detail) {
        state.detail = detail;
    },
    //收藏
    collect(state, detail) {
        state.collections.push(detail);
    },
    //取消
    cancel(state, id) {
        var index = state.collections.findIndex(item => item.id === id)
        state.collections.splice(index, 1);
    }
}

//actions 
const actions = {
    //获取首页的数据
    requestListAction(context) {
        //如果list有数据了，就不需要再次发起请求
        if (context.state.list.length > 0) {
            return;
        }

        //发起请求
        requestList().then(res => {
            //修改数据
            context.commit("changeList", res.data.data)
        })
    },
    //获取详情的数据的动作
    requestDetailAction(context, id) {
        //这次的要请求的id和上一次请求过得id是否一样
        //如果一样，就不发请求；如果不一样，就发
        if (id === context.state.detail.id) {
            return;
        }

        requestDetail(id).then(res => {
            //修改detail
            context.commit("changeDetail", res.data.detail)
        })
    },
    //页面触发收藏的动作
    collectAction(context, detail) {
        context.commit("collect", detail)
    },
    //页面触发取消收藏的动作
    cancelAction(context, id) {
        context.commit("cancel", id)
    }
}

//导出数据
const getters = {
    //导出首页的数据
    list(state) {
        return state.list
    },
    //导出详情的数据
    detail(state) {
        return state.detail
    },
    //导出collections 
    collections(state) {
        return state.collections
    },
    //是否收藏
    isCollect(state) {
        return state.collections.some(item => item.id === state.detail.id)
    }
}



const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
export default store;