import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { registerComponents } from './plugins/components'
import { registerDirectives } from './plugins/directives'
import { makeServer } from './mock/server'

import antdv from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'

import 'virtual:windi.css'

if (import.meta.env.DEV) {
  makeServer()
}

const app = createApp(App).use(router).use(store).use(antdv)

registerComponents(app)
registerDirectives(app)

app.mount('#app')
