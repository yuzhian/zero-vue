import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import antdv from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import components from './components/glob'

import { makeServer } from './mock/server'

if (import.meta.env.MODE === 'development') {
  makeServer()
}

const app = createApp(App).use(router).use(antdv)
for (const key in components) {
  app.component(key, components[key])
}
app.mount('body')
