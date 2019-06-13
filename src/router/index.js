import Vue from 'vue'
import Router from 'vue-router'
import adminHome from '@/components/admin/home'
import adminHead from '@/components/admin/head'
import dataCenter from '@/components/admin/dataCenter'
import reviewCenter  from '@/components/admin/reviewCenter'
import carCenter  from '@/components/admin/carCenter'
import orderCenter  from '@/components/admin/orderCenter'

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
        },
        {
          name:'reviewCenter',
          path:'reviewCenter',
          component: reviewCenter
        },
        {
          name:'carCenter',
          path:'carCenter',
          component: carCenter
        },
        {
          name:'orderCenter',
          path:'orderCenter',
          component: orderCenter
        },
      ]
    }
  ]
})
