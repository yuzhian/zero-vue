import { BindingMetadata } from '@vue/compiler-core'
import store from '../../store'

function handlePermission(el: HTMLElement, binding: BindingMetadata) {
  if ((binding.value, store.getters['permission/exists'](binding.value))) return (el.style.visibility = 'visible')
  el.style.visibility = 'hidden'
}

export default {
  mounted(el: HTMLElement, binding: BindingMetadata) {
    handlePermission(el, binding)
  },
  updated(el: HTMLElement, binding: BindingMetadata) {
    handlePermission(el, binding)
  },
}
