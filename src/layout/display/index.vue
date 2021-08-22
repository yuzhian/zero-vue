<template>
  <a-layout-header class="fixed w-screen flex z-999 bg-[#000000cc] backdrop-saturate-[180%] backdrop-blur-xl backdrop-filter select-none">
    <router-link to="/">
      <div class="float-left w-120px h-32px mt-16px bg-[#ffffff33] cursor-pointer"></div>
    </router-link>

    <router-link class="absolute right-4" to="/dashboard">
      <a-button ghost>
        <DashboardOutlined />控制台
      </a-button>
    </router-link>
  </a-layout-header>

  <a-layout-content>
    <router-view />
  </a-layout-content>

  <a-layout-footer class="text-center">Ant Design ©2018 Created by Ant UED</a-layout-footer>
</template>

<script setup>
import { DashboardOutlined } from '@ant-design/icons-vue'

import RouterMenu from '@/components/RouterMenu.vue'

import routes from '@/router/display'

const menus = routes.filter(({ path, meta }) => path !== '/' && (!meta || !meta.hidden))
</script>
