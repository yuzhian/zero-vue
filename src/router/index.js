import Vue from 'vue'
import VueRouter from 'vue-router'

import main from './main'
import demo from './demo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layout/main/Index'),
    children: [
      ...main,
      {
        path: 'demo',
        component: { render: h => h("router-view") },
        children: demo
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
