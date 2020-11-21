export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/Index'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About'),
    meta: {
      title: '关于'
    }
  }
]
