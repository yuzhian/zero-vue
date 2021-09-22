import { DirectiveBinding } from 'vue'
import { message } from 'ant-design-vue'
import Clipboard from 'clipboard'
import { ClipboardHandler } from 'src/typings'

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding<ClipboardHandler>) {
    const targetElement = document.querySelector(binding.arg as string)
    if (!targetElement) return

    const { success, error } = binding.value || {}
    const clipboard = new Clipboard(el, { target: () => targetElement })
    clipboard.on('success', e => {
      e.clearSelection()
      success ? success(e) : message.success('已复制到剪切板')
    })
    clipboard.on('error', e => {
      e.clearSelection()
      error ? error(e) : message.warn('复制失败')
    })
  },
}
