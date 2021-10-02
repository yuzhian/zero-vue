<template>
  <a-menu :openKeys="openKeys" :selectedKeys="selectedKeys" select="none" border="0">
    <Item v-for="route in routes" :route="route" parent-path="/" />
  </a-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import Item from './Item.vue'

import routes from '/src/router/console'

const selectedKeys = ref<Array<string>>([])
const openKeys = ref<Array<string>>([])

function changeKeysByRoute(route = useRoute()) {
  const routePaths = route.matched.slice(1).map(({ path }) => path)
  selectedKeys.value = routePaths
  openKeys.value = routePaths
}

changeKeysByRoute()
onBeforeRouteUpdate(to => changeKeysByRoute(to))
</script>
