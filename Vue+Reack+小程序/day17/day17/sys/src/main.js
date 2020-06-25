// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


//1.引入reset.css 
import "./assets/css/reset.css"
import "./stylus/index.styl"

//2.公共组件
import common from "./common"
for (let i in common) {
  Vue.component(i, common[i])
}

//3.配置过滤器
import filter from "./filter"
for (let i in filter) {
  Vue.filter(i, filter[i])
}

//4.store 
import store from "./store"

//5.element-ui 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// 登录拦截
router.beforeEach((to, from, next) => {
  //如果前往的是登录
  if(to.path=="/login"){
    next();
    return;
  }
  
  //如果不是登录 ，那么要判断是否登录
  if(localStorage.getItem("isLogin")){//登录了
    next();
    return;
  }

  //不是登录 也没有登录
  next("/login")
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
