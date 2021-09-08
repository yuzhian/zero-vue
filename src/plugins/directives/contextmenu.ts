import { createApp } from '@vue/runtime-dom'
import Contextmenu from '../../components/Contextmenu'

const _WRAPPER_ID = 'z_contextmenu_wrapper'

function loadWrapper(): HTMLElement {
  let wrapper = document.getElementById(_WRAPPER_ID)
  if (wrapper) {
    return wrapper
  }
  wrapper = document.createElement('div')
  wrapper.id = _WRAPPER_ID
  document.body.appendChild(wrapper)
  return wrapper
}

function mountContext(wrapper: HTMLElement) {
  createApp(Contextmenu).mount(wrapper)
}

function showContextmenuAt({ clientX, clientY }: MouseEvent) {
  const wrapper = loadWrapper()
  wrapper.setAttribute('style', `left: ${clientX}px; top: ${clientY}px; position: relative;`)
  mountContext(wrapper)
}

export default {
  mounted(el: HTMLElement) {
    el.addEventListener('contextmenu', e => {
      e.preventDefault()
      showContextmenuAt(e)
    })
  },
}
