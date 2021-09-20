import { DirectiveBinding } from 'vue'

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding<Function>) {
    let timer: number
    el.addEventListener('input', () => {
      clearTimeout(timer)
      timer = setTimeout(() => binding.value(), Number(binding.arg) || 200)
    })
  },
}
