import 'vue-router'
import { FunctionalComponent } from 'vue'
import { AntdIconProps } from '@ant-design/icons-vue/lib/components/AntdIcon'

declare module 'vue-router' {
  interface RouteMeta {
    title: string
    icon?: FunctionalComponent<AntdIconProps>
    hidden?: boolean
  }
}

export interface ClipboardHandler {
  success: Function
  error: Function
}
