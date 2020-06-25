
import Vue from 'vue'  //   导入vue模块
import App from './App'  // 导入根组件

Vue.config.productionTip = false
// 指定app 类型  是应用级的
App.mpType = 'app'

// 实例化vue实例
const app = new Vue(App)

// 挂载app
app.$mount()
