<template>
  <a-sub-menu v-if="hasPermission(props.route?.meta?.permission) && !props.route?.meta?.hidden && children" :key="routePath" :title="title">
    <template #icon><component :is="icon" /></template>
    <Item v-for="(v, i) in children" :key="i" :route="v" :parent-path="routePath" />
  </a-sub-menu>
  <a-menu-item v-if="hasPermission(props.route?.meta?.permission) && !props.route?.meta?.hidden && !children" :key="routePath">
    <template #icon><component :is="icon" /></template>
    <a v-if="isExternalLink(path)" :href="routePath" target="_black">{{ title }}</a>
    <router-link v-else :to="routePath">{{ title }}</router-link>
  </a-menu-item>
</template>

<script setup lang="ts">
import * as antIcons from '@ant-design/icons-vue'
import hasPermission from '/src/plugins/permission'

const props = defineProps({
  route: Object,
  parentPath: String,
})

const { path, name, children, meta } = props.route as any

const routePath = completePath(props.parentPath || '', path)
const title = meta?.title || name || path
const icon = antIcons[meta?.icon]

/**
 * 当前路由菜单对应的完整路由地址
 *
 * @param {string} parentPath 上级完整路径
 * @param {string} currentPath 当前路径
 * @returns 当前完整路径
 */
function completePath(parentPath: string, currentPath: string) {
  if (isExternalLink(currentPath)) return currentPath
  else if (currentPath.startsWith('/')) return currentPath
  return (parentPath.endsWith('/') ? parentPath : parentPath + '/') + currentPath
}

function isExternalLink(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
</script>
