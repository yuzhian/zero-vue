<template>
  <a-descriptions bordered size="small">
    <template #title>
      <a-button type="link">{{ title }}</a-button>
    </template>
    <a-descriptions-item v-for="(val, name) in dependencies" :key="name" :label="name">{{ val }}</a-descriptions-item>
  </a-descriptions>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: '' },
  dependencies: { type: Object, default: {} },
})
</script>
