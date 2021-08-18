import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/console/dashboard/index.vue'),
    meta: { title: '控制台' },
  },
  {
    path: '/demo/full',
    name: 'Demo1',
    component: () => import('@/views/common/PreRoute.vue'),
    meta: { title: '测试页1', icon: 'TrophyOutlined' },
  },
  {
    path: '/demo/hidden',
    name: 'Demo2',
    component: () => import('@/views/common/PreRoute.vue'),
    meta: {
      title: '测试页2',
      hidden: true,
    },
  },
  {
    path: '/demo/no-name-and-meta',
    component: () => import('@/views/common/PreRoute.vue'),
  },
]

export default routes
