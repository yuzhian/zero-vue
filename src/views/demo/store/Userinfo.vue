<template>
  <div class="h-screen-sm content-around justify-around">
    <contrast-pre :left="token" :right="store.state.account.token">
      <a-button @click="saveToken">创建访问令牌</a-button>
      <a-button @click="clearToken">清理访问令牌</a-button>
    </contrast-pre>

    <contrast-pre :left="userinfo" :right="store.getters['account/userinfo']">
      <a-button @click="saveUserinfo">创建用户信息</a-button>
      <a-button @click="clearUserinfo">清理用户信息</a-button>
    </contrast-pre>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import ContrastPre from '@/components/ContrastPre.vue'

const store = useStore()

const token = '1234567890'
const userinfo = {
  banner: 'https://source.unsplash.com/300x200',
  avatar: 'https://source.unsplash.com/32x32',
  nickname: '张三',
  bio: '法外狂徒张三',
}

const saveUserinfo = () => {
  store.commit('account/userinfo', userinfo)
}
const clearUserinfo = () => {
  store.commit('account/clearUserinfo')
}
const saveToken = () => {
  store.commit('account/token', token)
}
const clearToken = () => {
  store.commit('account/clearToken')
}
</script>
