<template>
  <a-layout-header class="layout-header">
    <div class="logo" @click="$router.push('/')" />
    <router-menus :routes="routes" mode="horizontal" theme="dark">
      <template #rightPanel>
        <a-button ghost @click="$router.push('/dashboard')">
          <DashboardOutlined />控制台
        </a-button>
      </template>
    </router-menus>
  </a-layout-header>

  <a-layout-content class="layout-content">
    <router-view />
  </a-layout-content>

  <a-layout-footer class="layout-footer">
    Ant Design ©2018 Created by Ant UED
  </a-layout-footer>
</template>

<script>
import { defineComponent } from 'vue'
import routes from '../../router/public'

import RouterMenus from '../../components/RouterMenus.vue'

import { DashboardOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  name: 'PublicLayout',
  components: {
    RouterMenus,
    DashboardOutlined,
  },
  data: () => ({
    routes: routes.filter(({ path, meta: { hidden } }) => path !== '/' && !hidden),
  }),
})
</script>

<style lang="scss" scoped>
.layout-header {
  position: fixed;
  z-index: 100;
  width: 100vw;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  background: #000000cc;

  .logo {
    width: 120px;
    height: 32px;
    background: #ffffff33;
    margin: 16px 24px 16px 0;
    float: left;
    cursor: pointer;
  }
}
.layout-footer {
  text-align: center;
}
</style>
