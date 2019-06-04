import Vue from 'vue'
import Router from 'vue-router'
import adminHome from '@/components/admin/home'
import adminHead from '@/components/admin/head'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: adminHead,
      children:[
        {
          path:'/admin',
          component: adminHome,
        }
      ]
    }
  ]
})
