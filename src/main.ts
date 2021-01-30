import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import antdv from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import './plugins'

import { makeServer } from './mock/server'

if (import.meta.env.MODE === 'development') {
  makeServer()
}

createApp(App).use(router).use(antdv).mount('body')
