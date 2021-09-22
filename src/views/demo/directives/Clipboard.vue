<template>
  <a-space>
    <code id="code" bg="yellow-200">{{ code }}</code>
    <a-button v-clipboard:#code>复制</a-button>
    <a-button v-clipboard:#code="{ success: handleSuccess, error: handleError }">{{ btn }}</a-button>
  </a-space>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const code = reactive(['ACCOUNT_INFO_GET', 'ACCOUNT_PERMISSION_TEST'])

const btn = ref<string>('复制')
const handleSuccess = (e: ClipboardJS.Event) => {
  handleChangeBtnText('复制成功')
}
const handleError = (e: ClipboardJS.Event) => {
  handleChangeBtnText('复制失败')
}
const handleChangeBtnText = (text: string): void => {
  btn.value = text
  setTimeout(() => {
    btn.value = '复制'
  }, 2000)
}
</script>
