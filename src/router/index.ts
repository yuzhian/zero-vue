import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

import publicRoutes from './public'
import managementRoutes from './management'
import errorRoutes from './error'

const routes: RouteRecordRaw[] = [
  // 公开页面, 首页/新闻/产品/支持等, 上中下布局
  {
    path: '/',
    component: () => import('../layout/public/index.vue'),
    children: publicRoutes,
  },
  // 控制台, 用户服务等, 顶部-侧边布局
  {
    path: '/',
    component: () => import('../layout/management/index.vue'),
    children: managementRoutes,
  },
  // 异常页面, 401/403/500/404等, 单页
  ...errorRoutes,
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
