import { reactive } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

import MenuItem from './MenuItem.jsx'

import routes from '@/router/console.ts'

export default {
  setup() {
    const keys = reactive({ selected: [], opened: [] })
    changeKeysByRoute()
    onBeforeRouteUpdate(to => changeKeysByRoute(to))

    function changeKeysByRoute(route = useRoute()) {
      const routes = route.matched.slice(1).map(item => item.path)
      keys.selected = routes
      keys.opened = routes
    }

    return () => (
      <a-menu mode='inline' openKeys={keys.opened} selectedKeys={keys.selected} class='bg-[#ffffff00] select-none border-0'>
        {routes.map(item => (
          <MenuItem menu={item} parent-path='/' class='bg-[#ffffff00]' />
        ))}
      </a-menu>
    )
  },
}
