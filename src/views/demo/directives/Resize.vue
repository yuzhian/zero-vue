<template>
  <pre h="full" w="full" bg="blue-100" v-resize="handleResize">{{ contentRect }}</pre>
</template>

<script setup>
import { ref } from 'vue'

const contentRect = ref({ a: 1 })

function handleResize(entries) {
  contentRect.value = entries[0].contentRect
}
</script>
