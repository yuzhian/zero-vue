export default [
  // ...
  // define at the very end
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/error/NotFound.vue'),
    meta: { title: '页面丢失!' },
  },
]
