export default {
  mounted(el: HTMLElement) {
    el.addEventListener('contextmenu', e => {
      e.preventDefault()
      console.log(e.clientX, e.clientY)
    })
  },
}
