import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [vue(), vueJsx(), WindiCSS()],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  base: './',
  server: {
    fs: {
      strict: true,
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'layout-header-background': '#000000cc',
          'text-selection-bg': 'rgba(24, 144, 255, 0.25)',
          'text-color-inverse': 'currentColor',
        },
        javascriptEnabled: true,
      },
    },
  },
})
