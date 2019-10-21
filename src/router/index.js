import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Search from '@/components/Search'
import Index from '@/components/Index'
import Play from '@/components/Play'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/index',
      name:"index",
      component:Index,
      children:[
        {
          path: '/HelloWorld',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: '/Home',
          name: 'Home',
          component: Home
        },
        {
          path: '/Search',
          name: 'Search',
          component: Search
        },


      ]

    },
    {
      path:'/Play',
      name:'Play',
      component:Play
    },
    {
      path:"/*",
      redirect:'/HelloWorld'
    }
  ]
})
