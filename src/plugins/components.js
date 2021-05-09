import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context('@/components/global', true, /\.(vue|js|ts)$/)

// ./src/components/global
for (const file of requireComponent.keys()) {
  const componentConfig = requireComponent(file)
  const name = file
    .replace(/index.js/, '')
    .replace(/^\.\//, '')
    .replace(/\.\w+$/, '')
  const componentName = upperFirst(camelCase(name))

  Vue.component(`Z${componentName}`, componentConfig.default || componentConfig)
}
