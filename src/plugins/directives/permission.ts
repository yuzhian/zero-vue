import { DirectiveBinding } from 'vue'
import store from '../../store'

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    if (store.getters['permission/exists'](binding.value)) return
    el.parentNode?.removeChild(el)
  },
}
