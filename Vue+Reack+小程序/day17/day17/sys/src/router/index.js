import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const login = () => import("../pages/login")
const index = () => import("../pages/index")

const manage = () => import("../pages/manage")
const user = () => import("../pages/user")
const news = () => import("../pages/news")
const device = () => import("../pages/device")
const welcome = () => import("../pages/welcome")
export default new Router({
  routes: [
    {
      path: "/login",
      component: login
    },
    {
      path: "/index",
      component: index,
      children:[
        {
          path:"welcome",
          component:welcome
        },
        {
          path:"manage",
          component:manage,
          name:"管理员列表页",
          beforeEnter(to,from,next){
            var type=localStorage.getItem("type");
            if(type==="0"){
              next();
            }else{
              next("/index/welcome")
            }
          }
        },
        {
          path:"user",
          component:user,
          name:"用户列表页"
        },
        {
          path:"news",
          component:news,
          name:"通知列表页"
        },
        {
          path:"device",
          component:device,
          name:"设备列表页"
        },
        {
          path:"",
          redirect:"welcome"
        }
      ]
    },
    {
      path: "*",
      redirect: "/login"
    },
  ]
})
