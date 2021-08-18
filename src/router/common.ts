import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    // define at the very end
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/common/NotFound.vue'),
    meta: { title: '页面丢失!' },
  },
]

export default routes
