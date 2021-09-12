<template>
  <a-space>
    <a-tooltip :visible="tooltip.visible" :title="tooltip.message" :color="tooltip.color">
      <code id="code" bg="yellow-200">{{ code }}</code>
    </a-tooltip>
    <a-button v-clipboard:#code>复制</a-button>
    <a-button v-clipboard:#code="{ success: handleSuccess, error: handleError }">复制, 自定义处理</a-button>
  </a-space>
</template>

<script lang="ts">
import ClipboardJS from 'clipboard'
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    tooltip: { visible: false, message: '', color: '' },
    code: ['ACCOUNT_INFO_GET', 'ACCOUNT_PERMISSION_TEST'],
  }),
  methods: {
    handleSuccess(e: ClipboardJS.Event) {
      this.handleOpenTooltip('已复制到剪切板', 'green')
    },
    handleError(e: ClipboardJS.Event) {
      this.handleOpenTooltip('复制失败', 'red')
    },
    handleOpenTooltip(message: string, color: string) {
      this.tooltip = { visible: true, message, color }
      setTimeout(() => {
        this.tooltip.visible = false
      }, 2000)
    },
  },
})
</script>
