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
      <component
        v-for="({ icon, cls, trigger, handler }, index) in rButtons"
        :key="index"
        :is="icon"
        class="m-2 text-xl leading-0 text-gray-300 active:rotate-360 transform duration-200"
        :class="cls"
        @[trigger]="handler"
      />

      <!-- 头像框 -->
      <a-dropdown :trigger="['hover']" :overlayStyle="{ position: 'absolute' }">
        <a-avatar :src="userinfo.avatar" :style="{ cursor: 'pointer' }" />
        <template #overlay>
          <user-card :banner="userinfo.banner" :avatar="userinfo.avatar" :nickname="userinfo.nickname" :bio="userinfo.bio" />
        </template>
      </a-dropdown>
    </div>
  </a-layout-header>

  <!-- 侧栏 -->
  <a-layout-sider class="absolute overflow-x-hidden left-0 bottom-0 h-[calc(100vh-64px)] bg-gray-100">
    <route-menu mode="inline" :routes="menus" />
  </a-layout-sider>

  <!-- 主体 -->
  <a-layout-content class="absolute overflow-auto right-0 bottom-0 h-[calc(100vh-64px)] w-[calc(100vw-200px)] p-4 bg-gray-100">
    <router-view :key="$route.fullPath" v-if="routerAlive" />
  </a-layout-content>
</template>

<script setup>
import { nextTick, ref } from 'vue'
import { useRouter } from 'vue-router'
import { SettingOutlined, HeatMapOutlined, MessageOutlined, SyncOutlined } from '@ant-design/icons-vue'

import RouteMenu from './menu/RouteMenu.jsx'
import UserCard from '@/components/UserCard.vue'

import routes from '/src/router/console'

const router = useRouter()

// 菜单项
const menus = routes.filter(({ path, meta }) => path !== '/dashboard' && (!meta || !meta.hidden))

// 用户信息
const userinfo = {
  banner: 'https://source.unsplash.com/300x200',
  avatar: 'https://source.unsplash.com/32x32',
  nickname: '张三',
  bio: '法外狂徒张三',
}

// reload component
let routerAlive = ref(true)
const refreshComponent = () => {
  routerAlive.value = false
  nextTick(() => (routerAlive.value = true))
}

// 顶栏右侧按钮
const rButtons = [
  { text: '首页', icon: HeatMapOutlined, handler: () => router.push('/'), trigger: 'click', cls: '' },
  { text: '刷新', icon: SyncOutlined, handler: () => refreshComponent(), trigger: 'click', cls: '' },
  { text: '设置', icon: SettingOutlined, handler: '', trigger: '', cls: '' },
  { text: '消息', icon: MessageOutlined, handler: '', trigger: '', cls: '' },
]
</script>
