import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/console/dashboard/index.vue'),
    meta: { title: '控制台' },
  },
  {
    path: '/console/full',
    name: 'ConosleFull',
    component: () => import('@/views/common/PreRoute.vue'),
    meta: { title: 'ConosleFull Page', icon: 'TrophyOutlined' },
  },
  {
    path: '/console/hidden',
    name: 'ConsoleHidden',
    component: () => import('@/views/common/PreRoute.vue'),
    meta: {
      title: 'ConsoleHidden Page',
      hidden: true,
    },
  },
  {
    path: '/console/no-name-and-meta',
    component: () => import('@/views/common/PreRoute.vue'),
  },
]

export default routes
