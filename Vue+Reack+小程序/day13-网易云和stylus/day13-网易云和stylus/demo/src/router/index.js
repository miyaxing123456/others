import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login=()=>import("../pages/login")
const index=()=>import("../pages/index")
export default new Router({
  routes: [
    {
      path:"/index",
      component:index
    },
    {
      path:"/login",
      component:login
    },
    {
      path:"*",
      redirect:"/login"
    }
  ]
})
