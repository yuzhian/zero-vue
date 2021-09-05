import { RouteRecordRaw, RouterView } from 'vue-router'

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
    meta: { title: 'ConsoleHidden Page', hidden: true },
  },
  {
    path: '/console/no-name-and-meta',
    component: () => import('@/views/common/PreRoute.vue'),
  },
  // 演示功能 start
  {
    path: '/demo/components',
    component: RouterView,
    meta: { title: '组件演示', icon: 'AppstoreOutlined' },
    children: [
      {
        path: 'pagination',
        component: RouterView,
        meta: { title: '分页' },
        children: [
          {
            path: 'table',
            component: RouterView,
            meta: { title: '表格' },
            children: [
              {
                path: 'simple',
                component: () => import('@/views/demo/components/pagination/table/Simple.vue'),
                meta: { title: '简单表格' },
              },
              {
                path: 'full',
                component: () => import('@/views/demo/components/pagination/table/Full.vue'),
                meta: { title: '复杂表格' },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: 'https://github.com/yuzhian/zero-vue',
    component: RouterView,
    meta: { title: 'Github', icon: 'GithubOutlined' },
  },
  // 演示功能 end
]

export default routes
