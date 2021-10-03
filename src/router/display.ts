import { RouteRecordRaw } from 'vue-router'
import { TrophyOutlined } from '@ant-design/icons-vue'

const router: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('/src/views/display/home/index.vue'),
    meta: { title: '首页' },
  },
  {
    path: '/display/full',
    name: 'DisplayFull',
    component: () => import('/src/views/demo/route/PreRoute.vue'),
    meta: { title: 'DisplayFull Page', icon: TrophyOutlined },
  },
  {
    path: '/display/hidden',
    name: 'DisplayHidden',
    component: () => import('/src/views/demo/route/PreRoute.vue'),
    meta: {
      title: 'DisplayHidden Page',
      hidden: true,
    },
  },
  {
    path: '/display/no-name-and-meta',
    component: () => import('/src/views/demo/route/PreRoute.vue'),
  },
]

export default router
