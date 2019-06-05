import Vue from 'vue'
import Router from 'vue-router'
import userLogin from '@/components/user/login'
import userhead from '@/components/user/head'
import sellcar from '@/components/user/sellcar'
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
          path: 'login',
          name: 'userLogin',
          component: userLogin,
        },
        {
          path: 'sellcar',
          name: 'sellcar',
          component: sellcar,
        }
      ]
    },{
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
