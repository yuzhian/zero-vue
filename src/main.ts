import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import antdv from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import 'virtual:windi.css'

import { makeServer } from './mock/server'
import { registerComponents } from './plugins/components'

// if (import.meta.env.MODE === 'development') {
//   makeServer()
// }

const app = createApp(App).use(router).use(antdv)
registerComponents(app)
app.mount('#app')
