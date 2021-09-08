import { h, reactive } from 'vue'
import * as antIcons from '@ant-design/icons-vue'

import { useRoute, onBeforeRouteUpdate } from 'vue-router'

import routes from '@/router/console.ts'

import '@/assets/antMenu.css'

function isTopRoute(parentPath) {
  return ['', '/'].indexOf(parentPath) >= 0
}

function isExternalLink(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

function pathResolve(parentPath, currentPath) {
  if (isExternalLink(currentPath)) return currentPath
  else if (currentPath.startsWith('/')) return currentPath
  return (parentPath.endsWith('/') ? parentPath : parentPath + '/') + currentPath
}

/**
 * 子项
 */
export const MenuItem = {
  setup(props, { attrs, slots, emit }) {
    const { route, 'parent-path': parentPath } = attrs
    const hidden = route.meta && route.meta.hidden
    if (hidden) return () => null
    const routePath = pathResolve(parentPath, route.path)
    const title = (route.meta && route.meta.title) || route.name || route.path
    const icon = isTopRoute(parentPath) ? h(antIcons[(route.meta && route.meta.icon) || 'NumberOutlined']) : ''

    if (route.children) {
      return () => (
        <a-sub-menu key={routePath} icon={icon} title={title}>
          {route.children.map((v, i) => (
            <MenuItem key={i} route={v} parent-path={routePath} />
          ))}
        </a-sub-menu>
      )
    }

    const content = isExternalLink(route.path) ? (
      <a href={routePath} target='_black'>
        {title}
      </a>
    ) : (
      <router-link to={routePath}>{title}</router-link>
    )
    return () => (
      <a-menu-item key={routePath} icon={icon}>
        {content}
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
      <a-menu openKeys={keys.opened} selectedKeys={keys.selected} attrs={attrs} v-slots={slots} class='select-none border-0'>
        {routes.map(route => (
          <MenuItem route={route} parent-path='/' />
        ))}
      </a-menu>
    )
  },
}
