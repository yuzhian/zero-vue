<template>
  <a-descriptions bordered :content-style="{ backgroundColor: 'white' }">
    <a-descriptions-item label="path">{{ route.path }}</a-descriptions-item>
    <a-descriptions-item label="fullPath">{{ route.fullPath }}</a-descriptions-item>
    <a-descriptions-item label="name">{{ route.name }}</a-descriptions-item>

    <a-descriptions-item label="params">{{ route.params }}</a-descriptions-item>
    <a-descriptions-item label="query">{{ route.query }}</a-descriptions-item>
    <a-descriptions-item label="hash">{{ route.hash }}</a-descriptions-item>

    <a-descriptions-item label="redirectedFrom">{{ route.redirectedFrom }}</a-descriptions-item>
    <a-descriptions-item label="meta" :span="2">
      <pre>{{ route.meta }}</pre>
    </a-descriptions-item>

    <a-descriptions-item label="matched" :span="3">
      <a-tree :tree-data="route.matched" v-model:expandedKeys="state.expandedKeys" v-model:selectedKeys="state.selectedKeys">
        <template #title="{ path }">{{ path }}</template>
      </a-tree>
    </a-descriptions-item>
  </a-descriptions>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const state = reactive({ expandedKeys: [], selectedKeys: [] })
</script>
