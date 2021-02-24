const modules = import.meta.globEager('./*.vue')

const components: { [key: string]: any } = {}
for (const path in modules) {
  components[path.replace(/\.\/([\w]+).vue/g, '$1')] =
    modules[path].default || modules[path]
}

export default components
