import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const login=()=>import("../pages/login")
const movie=()=>import("../pages/movie")
const movieDetail=()=>import("../pages/movieDetail")

export default new Router({
  routes: [
      {
        path:"/login",
        component:login
      },
      {
        path:"/movie",
        component:movie
      },
      {
        path:"/movieDetail",
        component:movieDetail
      },
      {
        path:"*",
        redirect:"/login"
      },
  ]
})
