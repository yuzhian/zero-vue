import { App } from 'vue'

const modules = import.meta.globEager('./directives/*.(ts|js)')

export const registerDirectives = (app: App) =>
  Object.entries(modules).forEach(([path, module]) => {
    const key = path.replace(/.\/directives\/([\w]+).(ts|js)/g, '$1')
    const directive = module.default || module
    app.directive(key, directive)
  })
