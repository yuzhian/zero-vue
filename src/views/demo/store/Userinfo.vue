<template>
  <div>
    <pre>{{ store.state.account.token }}</pre>
    <a-button @click="saveToken">创建访问令牌</a-button>
    <a-button @click="clearToken">清理访问令牌</a-button>

    <pre>{{ store.getters['account/userinfo'] }}</pre>
    <pre>{{ store.state.account.userinfo }}</pre>
    <a-button @click="saveUserinfo">创建用户信息</a-button>
    <a-button @click="clearUserinfo">清理用户信息</a-button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

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
