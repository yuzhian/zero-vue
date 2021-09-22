<template>
  <pre h="full" w="full" bg="blue-100" v-resize="handleResize">{{ contentRect }}</pre>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const contentRect = ref<DOMRectReadOnly>()

function handleResize(entries: ResizeObserverEntry[]) {
  contentRect.value = entries[0].contentRect
}
</script>
