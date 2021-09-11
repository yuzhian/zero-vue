import { BindingMetadata } from '@vue/compiler-core'

function support(stat: String, supports: any): Boolean {
  return supports instanceof Array ? supports.some(item => stat === item) : stat === supports
}

export default {
  mounted(el: HTMLElement, binding: BindingMetadata) {
    if (support(binding.arg as String, binding.value)) return
    el.parentNode?.removeChild(el)
  },
}
