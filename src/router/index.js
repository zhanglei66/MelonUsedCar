import Vue from 'vue'
import Router from 'vue-router'
import adminHome from '@/components/admin/home'
import adminHead from '@/components/admin/head'
import dataCenter from '@/components/admin/dataCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin/',
      component: adminHead,
      redirect: './admin/home',
      children:[
        {
          name:'adminHome',
          path:'home',
          component: adminHome,
        },
        {
          name:'dataCenter',
          path:'dataCenter',
          component: dataCenter
        }
      ]
    }
  ]
})
