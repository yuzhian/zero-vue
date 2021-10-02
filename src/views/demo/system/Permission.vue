<template>
  <!-- 演示数据 -->
  <a-space>
    <router-link to="/demo/route/permission">
      <a-button type="primary">测试路由</a-button>
    </router-link>
    <a-button v-if="hasPermission('ACCOUNT_INFO_GET')">ACCOUNT_INFO_GET</a-button>
    <a-button v-if="hasPermission(['ACCOUNT_INFO_GET', 'ACCOUNT_ROLE_GET'])">['ACCOUNT_INFO_GET', 'ACCOUNT_ROLE_GET']</a-button>
    <a-button v-if="hasPermission(['ACCOUNT_ROLE_DELETE'])">['ACCOUNT_ROLE_DELETE']</a-button>
  </a-space>

  <contrast-pre :left="permissions" :right="store.state.permission.permissions">
    <a-button @click="savePermissions">设置权限列表</a-button>
    <a-button @click="clearPermissions">清理权限列表</a-button>
  </contrast-pre>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import hasPermission from '/src/plugins/permission'
import ContrastPre from '/src/components/ContrastPre.vue'

const store = useStore()

const permissions = ['ACCOUNT_INFO_GET', 'ACCOUNT_PERMISSION_TEST']

const savePermissions = () => {
  store.commit('permission/permissions', permissions)
}

const clearPermissions = () => {
  store.commit('permission/clearPermissions')
}
</script>
