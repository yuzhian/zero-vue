import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
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

/**
 * 在原路由上过滤
 *
 * TODO 原路由树被污染
 * TODO 权限变更后菜单不会同步, 需刷新页面生效
 * TODO 权限变更后路由不会同步, 页面仍可访问/不可访问, 需刷新页面生效
 */
function filterRouteTree(routes: RouteRecordRaw[]): RouteRecordRaw[] {
  return routes
    .filter(route => (route.meta?.permission ? store.getters['permission/exists'](route.meta.permission) : true))
    .map(route => {
      if (route.children) route.children = filterRouteTree(route.children)
      return route
    })
}

const router = createRouter({
  history: createWebHistory(),
  routes: filterRouteTree(routes),
})

router.beforeEach((to, from, next) => {
  document.title = `${(to.meta.title as string) || (to.name as string) || to.path} | ${import.meta.env.VITE_APP_TITLE}`
  next()
})

export default router
