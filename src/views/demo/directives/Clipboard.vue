<template>
  <a-space>
    <code id="code" bg="yellow-200">{{ code }}</code>
    <a-button v-clipboard:#code>复制</a-button>
    <a-button v-clipboard:#code @click="handleClick">复制</a-button>
    <a-button v-clipboard:#code="{ success: handleSuccess, error: handleError }" @click="handleClick">复制, 自定义处理</a-button>
  </a-space>
</template>

<script lang="ts">
import ClipboardJS from 'clipboard'
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    code: ['ACCOUNT_INFO_GET', 'ACCOUNT_PERMISSION_TEST'],
  }),
  methods: {
    handleSuccess(e: ClipboardJS.Event) {
      console.log('success', e)
      alert('已复制到剪切板')
    },
    handleError(e: ClipboardJS.Event) {
      console.log('error', e)
      alert('复制失败')
    },
    handleClick(e: Event) {
      console.log('click', e)
    },
  },
})
</script>
