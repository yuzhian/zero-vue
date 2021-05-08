import Vue from 'vue'
import VueRouter from 'vue-router'

import main from './main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layout/main/Index'),
    children: main
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
