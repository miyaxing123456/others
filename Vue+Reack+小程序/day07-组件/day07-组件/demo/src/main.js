// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//全局注册search组件
import vSearch from "./components/search"
Vue.component("vSearch",vSearch)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App></App>'
})
