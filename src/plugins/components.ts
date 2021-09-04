import { App } from 'vue'

const modules = import.meta.globEager('/src/components/glob/*.(vue|tsx|jsx)')

export const registerComponents = (app: App) =>
  Object.entries(modules).forEach(([path, module]) => {
    const key = `Z${path.replace(/\/src\/components\/glob\/([\w]+).(vue|tsx|jsx)/g, '$1')}`
    const component = module.default || module
    app.component(key, component)
  })
