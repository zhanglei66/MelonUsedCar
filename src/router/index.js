import Vue from 'vue'
import Router from 'vue-router'
import userLogin from '@/components/user/login'
import userhead from '@/components/user/head'
import homepage from '@/components/user/homepage'
import buycar from '@/components/user/buycar'
import details from '@/components/user/details'

import sellcarform1 from '@/components/user/sellcarform1'
import sellcarform2 from '@/components/user/sellcarform2'
import sellcarform3 from '@/components/user/sellcarform3'
import adminHome from '@/components/admin/home'
import adminHead from '@/components/admin/head'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user/',
      name: 'user',
      component: userhead,
      children: [
        {
          path: 'homepage',
          name: 'homepage',
          component: homepage,
        },
        {
          path: 'login',
          name: 'userLogin',
          component: userLogin,
        },
        {
          path: 'buycar',
          name: 'buycar',
          component: buycar,
        },
        {
          path: 'details',
          name: 'details',
          component: details,
        },
        {
          path: 'sellcarform1',
          name: 'sellcarform1',
          component: sellcarform1
        },
        {
          path: 'sellcarform2',
          name: 'sellcarform2',
          component: sellcarform2
        },
        {
          path: 'sellcarform3',
          name: 'sellcarform3',
          component: sellcarform3
        }
      ]
    }, 
    {
      path: '/admin/',
      name: 'admin',
      component: adminHead,
      children:[
        {
          path: 'home',
          name: 'adminHome',
          component: adminHome,
        }
      ]
    }
  ]
})
