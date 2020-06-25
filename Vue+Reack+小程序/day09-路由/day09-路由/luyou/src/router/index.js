import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from "../components/home"
import shop from "../components/shop"
import order from "../components/order"

export default new Router({
  // 路由规则
  routes: [
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
    //重定向
    {
      path:"*",
      redirect:"/home"
    }
  ]
})
