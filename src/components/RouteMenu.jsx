import { h, reactive } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import * as antIcons from '@ant-design/icons-vue'

import routes from '/src/router/console.ts'

import '/src/assets/antMenu.css'

/**
 * 当前路由菜单对应的完整路由地址
 *
 * @param {string} parentPath 上级完整路径
 * @param {string} currentPath 当前路径
 * @returns 当前完整路径
 */
function completePath(parentPath, currentPath) {
  if (isExternalLink(currentPath)) return currentPath
  else if (currentPath.startsWith('/')) return currentPath
  return (parentPath.endsWith('/') ? parentPath : parentPath + '/') + currentPath
}

function isTopRoute(parentPath) {
  return ['', '/'].indexOf(parentPath) >= 0
}

function isExternalLink(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 子菜单组件树递归生成
 */
export const MenuItem = {
  props: { route: Object, parentPath: String },
  setup({ route: { path, name, children, meta }, parentPath }) {
    if (meta?.hidden) return () => null

    const routePath = completePath(parentPath, path)
    const title = meta?.title || name || path
    const icon = isTopRoute(parentPath) ? h(antIcons[meta?.icon || 'NumberOutlined']) : ''

    // 菜单目录
    if (children) {
      return () => (
        <a-sub-menu key={routePath} icon={icon} title={title}>
          {children.map((v, i) => (
            <MenuItem key={i} route={v} parent-path={routePath} />
          ))}
        </a-sub-menu>
      )
    }

    // 底层菜单
    return () => (
      <a-menu-item key={routePath} icon={icon}>
        {isExternalLink(path) ? (
          // 外链处理
          <a href={routePath} target='_black'>
            {title}
          </a>
        ) : (
          <router-link to={routePath}>{title}</router-link>
        )}
      </a-menu-item>
    )
  },
}

export default {
  setup(props, { attrs, slots, emit }) {
    const keys = reactive({ selected: [], opened: [] })
    function changeKeysByRoute(route = useRoute()) {
      const routePaths = route.matched.slice(1).map(({ path }) => path)
      keys.selected = routePaths
      keys.opened = routePaths
    }

    changeKeysByRoute()
    onBeforeRouteUpdate(to => changeKeysByRoute(to))

    return () => (
      <a-menu openKeys={keys.opened} selectedKeys={keys.selected} attrs={attrs} v-slots={slots} select='none' border='0'>
        {routes.map(route => (
          <MenuItem route={route} parent-path='/' />
        ))}
      </a-menu>
    )
  },
}
