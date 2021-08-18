import { RouteRecordRaw, createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router'

import displayRoutes from './display'
import consoleRoutes from './console'
import commonRoutes from './common'

const routes: RouteRecordRaw[] = [
  // 公开页面, 首页/新闻/产品/支持等, 上中下布局
  {
    path: '/',
    component: () => import('@/layout/display/index.vue'),
    children: displayRoutes,
  },
  // 控制台, 用户服务等, 顶部-侧边布局
  {
    path: '/',
    component: () => import('@/layout/console/index.vue'),
    children: consoleRoutes,
  },
  // 公共页面, 
  ...commonRoutes,
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to: RouteLocationNormalized, from) => {
  document.title = to.meta.title as string || to.name?.toString() || to.path
  return true
})

export default router
