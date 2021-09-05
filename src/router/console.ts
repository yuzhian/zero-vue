import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/console/dashboard/index.vue'),
    meta: { title: '控制台' },
  },
  // 演示功能 start
  {
    path: '/demo/route',
    component: RouterView,
    meta: { title: '路由及菜单演示', icon: 'NumberOutlined' },
    children: [
      {
        path: 'relative-path',
        name: 'RelativePath',
        component: () => import('@/views/demo/route/PreRoute.vue'),
        meta: { title: '相对路径' },
      },
      {
        path: '/absolute-path',
        name: 'AbsolutePath',
        component: () => import('@/views/demo/route/PreRoute.vue'),
        meta: { title: '绝对路径' },
      },
      {
        path: 'hidden',
        name: 'Hidden',
        component: () => import('@/views/demo/route/PreRoute.vue'),
        meta: { title: '隐藏页', hidden: true },
      },
      {
        path: 'no-meta',
        name: 'NoMeta',
        component: () => import('@/views/demo/route/PreRoute.vue'),
      },
      {
        path: 'no-name-and-meta',
        component: () => import('@/views/demo/route/PreRoute.vue'),
      },
    ],
  },
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
