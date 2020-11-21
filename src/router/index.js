import Vue from 'vue'
import VueRouter from 'vue-router'
import publicRouter from './public'
import pageRouter from './page'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/layout/home/Index'),
      children: publicRouter
    },
    // single pages - define at the very end
    ...pageRouter
  ]
})

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title || to.name) + ' | 零项目'
  next()
})

export default router
