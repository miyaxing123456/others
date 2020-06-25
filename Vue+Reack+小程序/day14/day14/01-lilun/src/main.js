// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//仓库
import store from "./store"


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //3.创建一个仓库
  store,
  components: { App },
  template: '<App/>'
})
