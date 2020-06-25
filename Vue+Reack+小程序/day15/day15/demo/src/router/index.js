import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login =()=>import ("../pages/login")
const detail =()=>import ("../pages/detail")
export default new Router({
  routes: [
      {
        path:"/login",
        component:login
      },
      {
        path:"/detail",
        component:detail
      },
      {
        path:"*",
        redirect:"/detail"
      }
  ]
})
