// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入reset.css rem.js 
import "./assets/css/reset.css"
import "./assets/js/rem"


//处理公共组件
import commonComponent from "./common"
for(var i in commonComponent){
  Vue.component(i,commonComponent[i])
}

//处理过滤器
import filters from "./filter"
for(var i in filters){
  Vue.filter(i,filters[i])
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
