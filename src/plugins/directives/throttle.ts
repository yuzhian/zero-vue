import { DirectiveBinding } from 'vue'

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding<Function>) {
    let timer: number | null
    el.addEventListener('input', () => {
      if (timer) return
      timer = setTimeout(() => {
        timer = null
        binding.value()
      }, Number(binding.arg) || 200)
    })
  },
}
