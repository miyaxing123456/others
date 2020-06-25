/*
1.安装vue-router
2.定义了路由出口
3.引入vue-router 
4.定义了一个路由对象，挂到vue实例上
5.配置路由规则
*/


//路由
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import home from "../components/home"
import order from "../components/order"
import shop from "../components/shop"

//实例化路由对象
export default new VueRouter({
    //路由规则
    routes:[
        {
            path:"/home",
            component:home
        },
        {
            path:"/order",
            component:order
        },
        {
            path:"/shop",
            component:shop
        },
    ]
})
