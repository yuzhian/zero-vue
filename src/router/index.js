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

router.beforeEach((to, form, next) => {
  let prefix = to.meta.title || to.name || ""
  document.title = `${prefix && prefix + " | "}${process.env.VUE_APP_TITLE}`
  next()
})

export default router
