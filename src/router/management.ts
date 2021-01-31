export default [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/dashboard/index.vue'),
    meta: { title: '控制台' },
  },
  {
    path: '/demo/full',
    name: 'Demo1',
    component: () => import('../views/demo/RoutePanel.vue'),
    meta: { title: '测试页1' },
  },
  {
    path: '/demo/hidden',
    name: 'Demo2',
    component: () => import('../views/demo/RoutePanel.vue'),
    meta: {
      title: '测试页2',
      hidden: true,
    },
  },
  {
    path: '/demo/no-name-and-meta',
    component: () => import('../views/demo/RoutePanel.vue'),
  },
]
