import { h } from 'vue'
import * as antIcons from '@ant-design/icons-vue'

import './MenuItem.css'

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

const MenuItem = {
  setup(props, { attrs, slots, emit }) {
    const { menu, 'parent-path': parentPath } = attrs
    const routePath = pathResolve(parentPath, menu.path)
    const title = (menu.meta && menu.meta.title) || menu.name || menu.path
    const icon = isTopRoute(parentPath) ? h(antIcons[(menu.meta && menu.meta.icon) || 'BorderOuterOutlined']) : ''

    if (menu.children) {
      return () => (
        <a-sub-menu key={routePath} v-slots={{ icon: () => icon, title: () => title }}>
          {menu.children.map((v, i) => (
            <MenuItem key={i} menu={v} parent-path={routePath} />
          ))}
        </a-sub-menu>
      )
    } else if (isExternalLink(menu.path)) {
      return () => (
        <a href={routePath} target='_black'>
          <a-menu-item key={routePath} v-slots={{ icon: () => icon }}>
            {title}
          </a-menu-item>
        </a>
      )
    }
    return () => (
      <router-link to={routePath}>
        <a-menu-item key={routePath} v-slots={{ icon: () => icon }}>
          {title}
        </a-menu-item>
      </router-link>
    )
  },
}

export default MenuItem
