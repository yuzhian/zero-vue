import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/console/dashboard/index.vue'),
    meta: { title: '控制台', icon: 'SafetyCertificateOutlined' },
  },
  // 演示功能 start
  {
    path: '/demo/route',
    component: RouterView,
    meta: { title: '路由菜单', icon: 'LayoutOutlined' },
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
        path: 'permission',
        name: 'Permission',
        component: () => import('@/views/demo/route/PreRoute.vue'),
        meta: { title: '权限页', permission: ['account:permission:test'] }, // 权限过滤, 不加载路由
      },
      {
        path: 'hidden',
        name: 'Hidden',
        component: () => import('@/views/demo/route/PreRoute.vue'),
        meta: { title: '隐藏页', hidden: true }, // 隐藏, 不显示在菜单, 可访问
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
      {
        path: 'https://github.com/yuzhian/zero-vue',
        component: RouterView,
        meta: { title: '外链', icon: 'GithubOutlined' },
      },
    ],
  },
  {
    path: '/demo/store',
    component: RouterView,
    meta: { title: '状态管理', icon: 'HeartOutlined' },
    children: [
      {
        path: 'userinfo',
        meta: { title: '用户信息' },
        component: () => import('@/views/demo/store/Userinfo.vue'),
      },
    ],
  },
  {
    path: '/demo/components',
    component: RouterView,
    meta: { title: '组件演示', icon: 'InboxOutlined' },
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
      {
        path: '/demo/mouse',
        component: RouterView,
        meta: { title: '鼠标操作' },
        children: [
          {
            path: 'contextmenu',
            component: () => import('@/views/demo/components/mouse/contextmenu/index.vue'),
            meta: { title: '右键菜单' },
          },
        ],
      },
    ],
  },
  {
    path: '/demo/directives',
    component: RouterView,
    meta: { title: '指令演示', icon: 'FireOutlined' },
    children: [
      {
        path: 'focus',
        component: () => import('@/views/demo/directives/Focus.vue'),
        meta: { title: '聚焦指令' },
      },
      {
        path: 'permission',
        component: () => import('@/views/demo/directives/Permission.vue'),
        meta: { title: '权限指令' },
      },
    ],
  },
  // 演示功能 end
]

export default routes
