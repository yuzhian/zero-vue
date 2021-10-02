import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/authority/:fullPath',
    name: 'PermissionDenied',
    component: () => import('/src/views/common/PermissionDenied.vue'),
    meta: { title: '无权限!' },
  },
  {
    // define at the very end
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('/src/views/common/PageNotFound.vue'),
    meta: { title: '页面丢失!' },
  },
]

export default routes
