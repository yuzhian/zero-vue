import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { registerComponents } from './plugins/components'
import { registerDirectives } from './plugins/directives'

import antdv from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import 'virtual:windi.css'

import './assets/glob/index.scss'

const app = createApp(App).use(router).use(store).use(antdv)

registerComponents(app)
registerDirectives(app)

app.mount('#app')
