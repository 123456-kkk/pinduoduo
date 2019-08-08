import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Rocommended  from "@/view/rocommended";
import Chat  from "@/view/chat";
import Search  from "@/view/search";
import My from '@/view/my'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:"hot",
          component: () => import('@/view/home/hot')
        },
        {
          path:'clothing',
          component: () => import('@/view/home/clothing')
        },
        {
          path:"/home",
          redirect:'/home/hot'
        }
      ]
    },
    {
      path:'/rocommended',
      component:Rocommended
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/chat',
      component:Chat
    },
    {
      path:'/my',
      component:My
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
