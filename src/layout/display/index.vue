<template>
  <a-layout-header w="screen" z="999" backdrop="saturate-[180%] blur-xl filter" display="flex" justify="between" position="fixed" select="none">
    <router-link to="/">
      <div w="32" h="8" mt="4" float="left" cursor="pointer" bg="[#ffffff33]"></div>
    </router-link>

    <router-link to="/dashboard">
      <a-button ghost><DashboardOutlined />控制台</a-button>
    </router-link>
  </a-layout-header>

  <a-layout-content>
    <router-view />
  </a-layout-content>

  <a-layout-footer text="center">Ant Design ©2018 Created by Ant UED</a-layout-footer>
</template>

<script setup>
import { DashboardOutlined } from '@ant-design/icons-vue'
</script>
