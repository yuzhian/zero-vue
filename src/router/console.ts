import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('/src/views/console/dashboard/index.vue'),
    meta: { title: '控制台', icon: 'ShopOutlined' },
  },

  {
    path: '/demo/route',
    component: RouterView,
    meta: { title: '路由菜单', icon: 'LayoutOutlined' },
    children: [
      {
        path: 'relative-path',
        name: 'RelativePath',
        component: () => import('/src/views/demo/route/PreRoute.vue'),
        meta: { title: '相对路径' },
      },
      {
        path: '/absolute-path',
        name: 'AbsolutePath',
        component: () => import('/src/views/demo/route/PreRoute.vue'),
        meta: { title: '绝对路径' },
      },
      {
        path: 'permission',
        name: 'Permission',
        component: () => import('/src/views/demo/route/PreRoute.vue'),
        meta: { title: '权限页', permission: ['ACCOUNT_PERMISSION_TEST'] }, // 权限过滤, 不加载路由
      },
      {
        path: 'hidden',
        name: 'Hidden',
        component: () => import('/src/views/demo/route/PreRoute.vue'),
        meta: { title: '隐藏页', hidden: true }, // 隐藏, 不显示在菜单, 可访问
      },
      {
        path: 'no-meta',
        name: 'NoMeta',
        component: () => import('/src/views/demo/route/PreRoute.vue'),
      },
      {
        path: 'no-name-and-meta',
        component: () => import('/src/views/demo/route/PreRoute.vue'),
      },
      {
        path: 'https://github.com/yuzhian/zero-vue',
        component: RouterView,
        meta: { title: '外链', icon: 'GithubOutlined' },
      },
    ],
  },

  {
    path: '/demo/components',
    component: RouterView,
    meta: { title: '组件演示', icon: 'UsbOutlined' },
    children: [
      {
        path: 'table',
        component: RouterView,
        meta: { title: '表格扩展' },
        children: [
          {
            path: 'table',
            component: () => import('/src/views/demo/components/table/Table.vue'),
            meta: { title: '基础表格' },
          },
        ],
      },
      {
        path: 'pagination',
        component: RouterView,
        meta: { title: '自动分页' },
        children: [
          {
            path: 'pagination',
            component: () => import('/src/views/demo/components/pagination/Pagination.vue'),
            meta: { title: '基础分页' },
          },
          {
            path: 'table-pagination',
            component: () => import('/src/views/demo/components/pagination/TablePagination.vue'),
            meta: { title: '表格分页' },
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
            component: () => import('/src/views/demo/components/mouse/contextmenu/index.vue'),
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
        path: 'permission',
        component: () => import('/src/views/demo/directives/Permission.vue'),
        meta: { title: '权限指令' },
      },
      {
        path: 'support',
        component: () => import('/src/views/demo/directives/Support.vue'),
        meta: { title: '状态支持' },
      },
      {
        path: 'resize',
        component: () => import('/src/views/demo/directives/Resize.vue'),
        meta: { title: '尺寸变化' },
      },
      {
        path: 'clipboard',
        component: () => import('/src/views/demo/directives/Clipboard.vue'),
        meta: { title: '剪贴板' },
      },
      {
        path: 'debounce',
        component: () => import('/src/views/demo/directives/Debounce.vue'),
        meta: { title: '输入框防抖' },
      },
      {
        path: 'throttle',
        component: () => import('/src/views/demo/directives/Throttle.vue'),
        meta: { title: '输入框节流' },
      },
    ],
  },

  {
    path: '/demo/system',
    component: RouterView,
    meta: { title: '全局工具', icon: 'RobotOutlined' },
    children: [
      {
        path: 'store',
        meta: { title: '全局状态' },
        component: () => import('/src/views/demo/system/Store.vue'),
      },
      {
        path: 'refresh_token',
        meta: { title: '令牌无感刷新' },
        component: () => import('/src/views/demo/system/RefreshToken.vue'),
      },
    ],
  },

  {
    path: '/demo/dependencies',
    component: RouterView,
    meta: { title: '依赖演示', icon: 'RobotOutlined' },
    children: [
      {
        path: 'heropatterns',
        meta: { title: '无缝纹理' },
        component: () => import('/src/views/demo/dependencies/Heropatterns.vue'),
      },
    ],
  },

  {
    path: '/collection',
    component: RouterView,
    meta: { title: '页面收集', icon: 'HeartOutlined' },
    children: [
      {
        path: 'matrix',
        component: () => import('/src/views/collection/Matrix.vue'),
        meta: { title: '字符雨' },
      },
      {
        path: 'keyboard',
        component: () => import('/src/views/collection/Keyboard.vue'),
        meta: { title: 'grid 键盘布局' },
      },
    ],
  },
]

export default routes
