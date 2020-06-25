import vue from "vue"
import vuex from "vuex"
vue.use(vuex)

import state from "./state"
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

import shop from "./modules/shop"
import order from "./modules/order"
import address from "./modules/address"
/*

-store 
    -state.js  通用状态
    -getters.js 导出通用状态
    -mutations.js 修改通用状态
    -actions.js 接收组件的修改通用状态的动作
    -modules 模块状态
        order.js 
        shop.js 
        address.js
*/

// 状态：通用状态，模块状态（购物车模块 订单模块 地址模块，收藏模块。。。）
//通用状态 info
//模块状态：shopping

export default new vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        shop:shop,
        order,
        address
    }
})