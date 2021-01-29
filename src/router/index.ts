import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

import publicRoutes from './public'

const routes: RouteRecordRaw[] = [
  // 公开页面, 首页/新闻/产品/支持等, 上中下布局
  {
    path: '/',
    component: () => import('../layout/public/index.vue'),
    children: publicRoutes,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from) => {
  document.title = to.meta.title || to.name || to.path
  return true
})

export default router
