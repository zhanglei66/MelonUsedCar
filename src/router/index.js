import Vue from 'vue'
import Router from 'vue-router'
import userLogin from '@/components/user/login'
import register from '@/components/user/register'
import userhead from '@/components/user/head'
import homepage from '@/components/user/homepage'
import buycar from '@/components/user/buycar'
import details from '@/components/user/details'
import personcenter from '@/components/user/personcenter'
import sellcarform from '@/components/user/sellcarform'
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
          path:'register',
          name: 'register',
          component: register,
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
          path: 'sellcarform',
          name: 'sellcarform',
          component: sellcarform
        },
        {
          path: 'personcenter',
          name: 'personcenter',
          component: personcenter
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
