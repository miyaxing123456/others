// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入css和js 
import "./assets/css/reset.css"
import "./assets/css/iconfont.css"
import "./assets/js/rem"

//引入animate.css 
import "animate.css"

//注册全局组件
// import goBack from "./common/goBack"
// Vue.component("goBack", goBack)

// import toSearch from "./common/toSearch"
// Vue.component("toSearch", toSearch)

//全局组件
import commonComponent from "./common"
//commonComponent={ goBack:{},toSearch:{template:"",data(){return {}}}}
for (var i in commonComponent) {
  Vue.component(i, commonComponent[i])
}


//全局过滤器
/*
import filterPrice from "./filter/filterPrice"
Vue.filter("filterPrice",filterPrice)*/

import filters from "./filter"
for (var i in filters) {
  Vue.filter(i, filters[i])
}

//登录拦截 进来每一个路由之前
router.beforeEach((to, from, next) => {
  console.log("全局守卫")
  if(to.path==="/login"){
    next();
    return;
  }
  //如果去的页面不是登录页面，那么就要看看是否登录了。
  //如果有isLogin,就进去；如果没有isLogin,那就前往登录页面登录。
  var isLogin=localStorage.getItem("isLogin");//没登录，没存，取到null;登陆了，存了，取到’1‘
  if(isLogin){
    next();
    return;
  }
  next("/login")

})

//离开每个路由的时候都会执行的钩子函数
router.afterEach( route => {
  console.log("离开了")
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
