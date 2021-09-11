import { BindingMetadata } from '@vue/compiler-core'
import store from '../../store'

export default {
  mounted(el: HTMLElement, binding: BindingMetadata) {
    if (store.getters['permission/exists'](binding.value)) return
    el.parentNode?.removeChild(el)
  },
}
