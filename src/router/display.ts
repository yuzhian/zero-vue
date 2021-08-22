import { RouteRecordRaw } from 'vue-router'

const router: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/display/home/index.vue'),
    meta: { title: '首页' },
  },
  {
    path: '/display/full',
    name: 'DisplayFull',
    component: () => import('@/views/common/PreRoute.vue'),
    meta: { title: 'DisplayFull Page', icon: 'TrophyOutlined' },
  },
  {
    path: '/display/hidden',
    name: 'DisplayHidden',
    component: () => import('@/views/common/PreRoute.vue'),
    meta: {
      title: 'DisplayHidden Page',
      hidden: true,
    },
  },
  {
    path: '/display/no-name-and-meta',
    component: () => import('@/views/common/PreRoute.vue'),
  },
]

export default router
