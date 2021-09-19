import { DirectiveBinding } from 'vue'
import { message } from 'ant-design-vue'

import Clipboard from 'clipboard'

interface ClipboardHandlers {
  success: Function
  error: Function
}

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const targetElement = document.querySelector(binding.arg as string)
    if (!targetElement) return

    const { success, error } = (binding.value || {}) as ClipboardHandlers
    const clipboard = new Clipboard(el, { target: () => targetElement })
      .on('success', e => {
        e.clearSelection()
        success ? success(e) : message.success('已复制到剪切板')
      })
      .on('error', e => {
        e.clearSelection()
        clipboard.destroy()
        error ? error(e) : message.warn('复制失败')
      })
  },
}
