import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import hasPermission from '../plugins/permission'
import store from '../store'

import displayRoutes from './display'
import consoleRoutes from './console'
import commonRoutes from './common'

const routes: RouteRecordRaw[] = [
  // 公开页面, 首页/新闻/产品/支持等, 上中下布局
  {
    path: '/',
    component: () => import('/src/layout/display/index.vue'),
    children: displayRoutes,
  },
  // 控制台, 用户服务等, 顶部-侧边布局
  {
    path: '/',
    component: () => import('/src/layout/console/index.vue'),
    children: consoleRoutes,
  },
  // 公共页面,
  ...commonRoutes,
]

const router = createRouter({ history: createWebHashHistory(), routes })

router.beforeResolve((to, from, next) => {
  document.title = `${(to.meta.title as string) || (to.name as string) || to.path} | ${import.meta.env.VITE_APP_TITLE}`
  if (!to.meta?.permission || hasPermission(to.meta?.permission)) return next()
  next(`/authority/${encodeURIComponent(to.fullPath)}`)
})

export default router
