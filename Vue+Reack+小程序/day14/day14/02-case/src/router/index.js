import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index=()=>import("../pages/index")
const detail=()=>import("../pages/detail")
const collection=()=>import("../pages/collection")
export default new Router({
  routes: [
    {
      path:'/',
      component:index
    },
    {
      path:"/detail",
      component:detail
    },
    {
      path:"/collection",
      component:collection
    }
  ]
})
