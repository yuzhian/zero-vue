<template>
  <div display="flex">
    <pre w="1/2">{{ left }}</pre>
    <pre w="1/2">{{ right }}</pre>
  </div>

  <a-space display="flex" justify="around">
    <a-space>
      <slot name="left"></slot>
    </a-space>
    <a-space>
      <slot name="right"></slot>
    </a-space>
  </a-space>

  <a-space display="flex" justify="around">
    <a-space>
      <slot></slot>
    </a-space>
  </a-space>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['left', 'right'],
  data: () => ({ checked: false }),
})
</script>

<style scoped>
.ant-col {
  display: flex;
  justify-content: center;
}
</style>
