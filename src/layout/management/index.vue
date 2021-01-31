<template>
  <a-layout-header class="layout-header">
    <div class="logo" @click="$router.push('/dashboard')" />
    <div class="right-panel">
      <SyncOutlined class="rotate" @click="reloadRoute()" />
      <SettingOutlined />
      <MessageOutlined />
      <AppstoreOutlined />
      <a-dropdown :trigger="['click']" :overlayStyle="{ position: 'fixed' }">
        <a-avatar :src="avatar" :style="{ cursor: 'pointer' }" />
        <template #overlay>
          <user-card :banner="banner" :avatar="avatar" :nickname="nickname" :bio="bio" />
        </template>
      </a-dropdown>
    </div>
  </a-layout-header>

  <a-layout>
    <a-layout-sider class="layout-sider">
      <router-menus :routes="routes" />
    </a-layout-sider>
    <a-layout-content class="layout-content">
      <router-view :key="$route.fullPath" v-if="routerAlive" />
      <back-top />
    </a-layout-content>
  </a-layout>

  <a-layout-footer class="layout-footer">
    Ant Design ©2018 Created by Ant UED
  </a-layout-footer>
</template>

<script>
import { defineComponent } from 'vue'
import routes from '../../router/management'

import RouterMenus from '../../components/RouterMenus.vue'
import UserCard from '../../components/UserCard.vue'
import BackTop from '../../components/BackTop.vue'

import { SettingOutlined, AppstoreOutlined, MessageOutlined, SyncOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  name: 'ManagementLayout',
  components: {
    RouterMenus,
    UserCard,
    BackTop,
    SettingOutlined,
    AppstoreOutlined,
    MessageOutlined,
    SyncOutlined,
  },
  data: () => ({
    routes: routes.filter(({ path, meta }) => path !== '/dashboard' && (!meta || !meta.hidden)),
    banner: 'https://source.unsplash.com/300x200',
    avatar: 'https://source.unsplash.com/64x64',
    nickname: '张三',
    bio: '法外狂徒张三',
    routerAlive: true,
  }),
  methods: {
    reloadRoute() {
      this.routerAlive = false
      this.$nextTick(function () {
        this.routerAlive = true
      })
    },
  },
})
</script>

<style lang="scss" scoped>
header.layout-header {
  position: fixed;
  z-index: 100;
  width: 100vw;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  background: #000000cc;

  .logo {
    float: left;
    width: 120px;
    height: 32px;
    margin: 16px 24px 16px 0;
    background: #ffffff33;
    cursor: pointer;
  }

  .right-panel {
    height: 64px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.25rem;
    color: white;
    cursor: pointer;
    & > span {
      margin: 0 0.5rem;
      -webkit-transition: 0.2s;
      -ms-transition: 0.2s;
      transition: 0.2s;
    }
    & > span:active {
      color: #9e9e9e;
    }
    & > span.rotate:active {
      transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      -webkit-transform: rotate(180deg);
    }
  }
}

.layout-sider {
  position: fixed;
  overflow: auto;
  left: 0;
  bottom: 0;
  width: 200px;
  height: calc(100vh - 64px);
  background: #f0f2f5;
}

.layout-content {
  margin-left: 200px;
  padding-top: 64px;
  min-height: calc(100vh - 70px);
}

.layout-footer {
  text-align: center;
}
</style>
