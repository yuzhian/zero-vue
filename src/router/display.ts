import { RouteRecordRaw } from 'vue-router'

const router: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/display/home/index.vue'),
    meta: { title: '首页' },
  },
]

export default router
