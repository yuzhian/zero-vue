<script>
import { h, reactive } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'

import { Menu, MenuItem } from 'ant-design-vue'

import * as antIcons from '@ant-design/icons-vue'

export default {
  setup(props, { slots, attrs, emit }) {
    const router = useRouter()
    const route = useRoute()

    // 当前路由
    let current = reactive([route.path])
    onBeforeRouteUpdate((to) => {
      current[0] = to.path
    })

    // 子项
    const routes =
      attrs.routes &&
      attrs.routes.map(({ name, path, meta }) => {
        return h(
          MenuItem,
          { key: path, onClick: () => router.push(path) },
          {
            icon: () => h(antIcons[(meta && meta.icon) || 'BorderOuterOutlined']),
            default: () => (meta && meta.title) || name || path,
          }
        )
      })
    const defaults = slots.default && slots.default()

    return () => h(Menu, { class: 'bg-[#ffffff00] select-none border-0', selectedKeys: current }, { default: () => [...(routes || []), ...(defaults || [])] })
  },
}
</script>

<style scoped>
.ant-menu::before,
.ant-menu::after {
  content: none;
}
</style>
