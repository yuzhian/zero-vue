export default [
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/views/common/Demo')
  },
  // catch all 404 - define at the very end
  {
    path: '*',
    component: () => import('@/views/common/NotFound')
  }
]
