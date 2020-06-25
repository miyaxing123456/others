import vue from "vue"
import vuex from "vuex"
vue.use(vuex)

const state = {
    info: null,//弹框的内容
    shopping:[],//保存购物车数据
}

const mutations = {
    changeInfo(state, info) {
        state.info = info;
    },
    addShop(state,detail){
        state.shopping.unshift(detail);
    },
    
}

const actions = {
    //修改info
    changeInfoAction(context,info){
        context.commit("changeInfo",info)
    },
    //添加购物车
    addShopAction(context,detail){
        context.commit("addShop",detail)
    }
}

const getters = {
    info(state){
        return state.info
    },
    shopping(state){
        return state.shopping;
    }
}

export default new vuex.Store({
    state,
    mutations,
    actions,
    getters
})