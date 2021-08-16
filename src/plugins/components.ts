import { Component } from 'vue'

const modules = import.meta.globEager('/src/components/glob/*.vue')

const components: { [key: string]: Component } = {}
for (const path in modules) {
  components[path.replace(/\/src\/components\/glob\/([\w]+).vue/g, '$1')] =
    modules[path].default || modules[path]
}

export default components
