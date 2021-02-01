import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/components/layouts'
import Home from '@/components/home'
import NotFound from '@/components/notFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        }
      ]
    },
    {
      path: '/*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
