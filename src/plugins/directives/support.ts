import { DirectiveBinding } from 'vue'

function support(stat: String, supports: any): Boolean {
  return supports instanceof Array ? supports.some(item => stat === item) : stat === supports
}

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    if (support(binding.arg as String, binding.value)) return
    el.parentNode?.removeChild(el)
  },
}
