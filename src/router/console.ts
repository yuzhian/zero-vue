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
    meta: {
      title: 'ConsoleHidden Page',
      hidden: true,
    },
  },
  {
    path: '/console/no-name-and-meta',
    component: () => import('@/views/common/PreRoute.vue'),
  },
  {
    path: '/demo/pagination/table',
    component: () => import('@/views/demo/pagination/Table.vue'),
  },
  {
    path: 'level1',
    name: 'level1',
    component: RouterView,
    children: [
      {
        path: '/level2',
        name: 'level2',
        component: RouterView,
        children: [
          {
            path: 'level3',
            name: 'level3',
            component: RouterView,
            children: [
              {
                path: 'level4',
                name: 'level4',
                component: () => import('@/views/common/PreRoute.vue'),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: 'https://www.baidu.com',
    component: () => import('@/views/common/PreRoute.vue'),
    meta: { title: '百度', icon: 'SearchOutlined' },
  },
]

export default routes
