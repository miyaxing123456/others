import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import login from "../pages/login"
import index from "../pages/index"
import movie from "../pages/movie"
import movieDetail from "../pages/movieDetail"
import food from "../pages/food"
import foodDetail from "../pages/foodDetail"
import search from "../pages/search"
import home from "../pages/home"
import order from "../pages/order"
import mine from "../pages/mine"

export default new Router({
  routes: [
    {
      path: "/login",
      component: login
    },
    {
      path: "/search",
      component: search
    },
    {
      path: "/index",
      component: index,
      children: [
        {//一级加 /，二级不加
          path: "home",
          component: home
        },
        {
          path: "order",
          component: order
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
        if(type==="0"||type==="1"){
          next();
        }else{
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
