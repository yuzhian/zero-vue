import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title: string
    icon?: string
    hidden?: boolean
  }
}

export interface ClipboardHandler {
  success: Function
  error: Function
}
