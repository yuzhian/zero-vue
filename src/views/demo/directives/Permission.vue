<template>
  <a-space>
    <router-link v-permission="'ACCOUNT_PERMISSION_TEST'" to="/demo/route/permission">
      <a-button type="primary">测试路由</a-button>
    </router-link>
    <a-button v-permission="'ACCOUNT_INFO_GET'">ACCOUNT_INFO_GET</a-button>
    <a-button v-permission="['ACCOUNT_INFO_GET', 'ACCOUNT_ROLE_GET']">['ACCOUNT_INFO_GET', 'ACCOUNT_ROLE_GET']</a-button>
    <a-button v-permission="['ACCOUNT_ROLE_DELETE']">['ACCOUNT_ROLE_DELETE']</a-button>
  </a-space>

  <contrast-pre :left="permissions" :right="store.state.permission.permissions">
    <a-button @click="savePermissions">设置权限列表</a-button>
    <a-button @click="clearPermissions">清理权限列表</a-button>
  </contrast-pre>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import ContrastPre from '/src/components/ContrastPre.vue'

const router = useRouter()
const store = useStore()

const permissions = ['ACCOUNT_INFO_GET', 'ACCOUNT_PERMISSION_TEST']

const savePermissions = () => {
  store.commit('permission/permissions', permissions)
  router.go(0)
}
const clearPermissions = () => {
  store.commit('permission/clearPermissions')
  router.go(0)
}
</script>
