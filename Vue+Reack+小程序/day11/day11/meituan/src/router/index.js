import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const login = () => import("../pages/login")
const index = () => { return import("../pages/index") }
const movie = () => import("../pages/movie")
const movieDetail = () => import("../pages/movieDetail")
const food = () => import("../pages/food")
const foodDetail = () => import("../pages/foodDetail")
const order = () => import("../pages/order")
const mine = () => import("../pages/mine")
const search = () => import("../pages/search")
const home = () => import("../pages/home")

export default new Router({
  mode:"history",
  routes: [
    {
      path: "/login",
      component: login
    },
    {
      path: "/search",
      component: search,
      name: "搜索的name",
      alias: "/sousuo"//别名
    },
    {
      path: "/index",
      component: index,
      children: [
        {//一级加 /，二级不加
          path: "home",
          component: home,
          name: "这是首页"
        },
        {
          path: "order",
          component: order,
          name: "这是订单"
        },
        {
          path: "mine",
          component: mine
        },
        {//二级重定向
          path: "",
          redirect: "home"
        }
      ]
    },
    {
      path: "/movie",
      component: movie,
      //路由独享守卫
      beforeEnter(to, from, next) {
        console.log("路由独享")
        //电影 路由只有超级管理员和电影管理员可以进入，其他角色都不可以。
        var type = localStorage.getItem("type")
        if (type === "0" || type === "1") {
          next();
        } else {
          next("/index/mine")
        }
      }
    },
    {
      path: "/movieDetail",
      component: movieDetail
    },
    {
      path: "/food",
      component: food
    },
    {
      path: "/foodDetail/:foodId",
      component: foodDetail
    },
    {//1级重定向
      path: "*",
      redirect: "/login"
    }
  ]
})
