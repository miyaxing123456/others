//购物车
const state = { 
    shopping:[],//保存购物车数据
}

const mutations = {
    addShop(state,detail){
        state.shopping.unshift(detail);
    },
    add(){},
    sub(){},
    del(){}
}

const actions = {  
    //添加购物车
    addShopAction(context,detail){
       
        context.commit("addShop",detail)
    }
}

const getters = {
   
    shopping(state){
        return state.shopping;
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}