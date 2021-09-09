<template>
  <div>
    <pre>{{ store.state.permission.permissions }}</pre>
    <a-button @click="savePermissions">设置权限列表</a-button>
    <a-button @click="clearPermissions">清理权限列表</a-button>

    <br />
    <a-button v-for="(item, index) in elements" :key="index" v-permission="item">{{ item }}</a-button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()

const permissions = ['account:info:get', 'account:permission:test']

const elements = [['account:info:get'], ['account:info:get', 'account:role:get'], ['account:role:delete']]

const savePermissions = () => {
  store.commit('permission/permissions', permissions)
}
const clearPermissions = () => {
  store.commit('permission/clearPermissions')
}
</script>
