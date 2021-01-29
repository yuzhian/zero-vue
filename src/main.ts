import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import antdv from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import './plugins'

createApp(App).use(router).use(antdv).mount('body')
