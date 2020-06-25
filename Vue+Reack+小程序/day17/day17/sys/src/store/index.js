import Vue from "vue"
import vuex from "vuex"
Vue.use(vuex)

import { state, mutations, getters } from "./mutations"
import actions from "./actions"

import user from "./modules/user"
import news from "./modules/news"
import device from "./modules/device"
export default new vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        user, news, device
    }
})