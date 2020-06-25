// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入重置样式和rem.js
import "./assets/css/reset.css"
import "./assets/js/rem"
import "./assets/css/iconfont.css"

Vue.config.productionTip = false

//全局组件
import goBack from "./common/goBack"
Vue.component("goBack",goBack)

import vSearch from "./common/vSearch"
Vue.component("vSearch",vSearch)

//全局过滤器
import priceFilter from "./filter/priceFilter"
Vue.filter("priceFilter",priceFilter)
import telFilter from "./filter/telFilter"
Vue.filter("telFilter",telFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
