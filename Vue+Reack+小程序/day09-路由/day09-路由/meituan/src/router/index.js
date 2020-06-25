import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import login from "../pages/login"
import index from "../pages/index"
import movie from "../pages/movie"
import movieDetail from "../pages/movieDetail"
import home from "../pages/home"
import order from "../pages/order"
import mine from "../pages/mine"
import food from "../pages/food"
import foodDetail from "../pages/foodDetail"
import search from "../pages/search"

export default new Router({
  routes: [
    {
      path: "/login",
      component: login
    },
    {
      path:"/search",
      component:search
    },
    {
      path: "/index",//一级路由
      component: index,
      children: [//二级路由
        {
          path: "home",//二级路由的path不加 / 
          component: home
        }, {
          path: "order",
          component: order
        },
        {
          path: "mine",
          component: mine
        },
        {//二级路由重定向
          path: "",
          redirect: "home"
        }
      ]
    },
    {
      path: "/movie",
      component: movie
    },
    {
      path: "/movieDetail",
      component: movieDetail
    },
    {
      path: "/food",
      component: food
    },
    {//动态路由
      path: "/foodDetail/:id",
      component: foodDetail
    },
    //重定向
    {
      path: "*",
      redirect: "/login"
    }
  ]
})
