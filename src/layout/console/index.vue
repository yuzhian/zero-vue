<template>
  <a-layout-header class="fixed w-screen flex justify-between z-999 bg-[#000000cc] backdrop-saturate-[180%] backdrop-blur-xl backdrop-filter select-none">
    <!-- 左侧 -->
    <div>
      <router-link to="/dashboard">
        <div class="float-left w-120px h-32px mt-16px bg-[#ffffff33] cursor-pointer"></div>
      </router-link>
    </div>

    <!-- 右侧 -->
    <div>
      <!-- 按钮组 -->
      <a-tooltip v-for="({text, icon, cls, trigger, handler}, index) in rButtons" :key="index" placement="topLeft" :title="text">
        <component :is="icon" class="m-2 text-xl leading-0 text-gray-300 active:rotate-180 transform duration-200" :class="cls" @[trigger]="handler" />
      </a-tooltip>
      <!-- 头像框 -->
      <a-dropdown :trigger="['hover']" :overlayStyle="{ position: 'absolute' }">
        <a-avatar :src="userinfo.avatar" :style="{ cursor: 'pointer' }" />
        <template #overlay>
          <user-card :banner="userinfo.banner" :avatar="userinfo.avatar" :nickname="userinfo.nickname" :bio="userinfo.bio" />
        </template>
      </a-dropdown>
    </div>
  </a-layout-header>

  <a-layout-sider class="absolute overflow-auto left-0 bottom-0 h-[calc(100vh-64px)] w-200px bg-gray-100">
    <router-menus :routes="menus" />
  </a-layout-sider>

  <a-layout-content class="absolute overflow-auto right-0 bottom-0 h-[calc(100vh-64px)] w-[calc(100vw-200px)] p-4 bg-gray-100">
    <router-view :key="$route.fullPath" v-if="routerAlive" />
  </a-layout-content>
</template>

<script setup>
import { nextTick } from 'vue'
import { SettingOutlined, AppstoreOutlined, MessageOutlined, SyncOutlined } from '@ant-design/icons-vue'

import RouterMenus from '@/components/RouterMenus.vue'
import UserCard from '@/components/UserCard.vue'

import routes from '/src/router/console'

// 菜单项
const menus = routes.filter(({ path, meta }) => path !== '/dashboard' && (!meta || !meta.hidden))

// 用户信息
const userinfo = {
  banner: 'https://source.unsplash.com/300x200',
  avatar: 'https://source.unsplash.com/32x32',
  nickname: '张三',
  bio: '法外狂徒张三',
}

// 重载组件
let routerAlive = true
const reloadRoute = () => {
  routerAlive = false
  nextTick(() => (routerAlive = true))
}

// 顶栏右侧按钮
const rButtons = [
  { text: '刷新', icon: SyncOutlined, handler: reloadRoute, trigger: 'click', cls: '' },
  { text: '设置', icon: SettingOutlined, handler: '', trigger: '', cls: '' },
  { text: '消息', icon: MessageOutlined, handler: '', trigger: '', cls: '' },
  { text: '工具箱', icon: AppstoreOutlined, handler: '', trigger: '', cls: '' },
]
</script>
