<template>
  距上次执行 n 秒后执行
  <a-row :gutter="20">
    <a-col :span="12">
      <a-input v-model:value="val1" v-throttle="handleInput1" />
      <p>{{ text1 }}</p>
    </a-col>
    <a-col :span="12">
      <a-input v-model:value="val2" v-throttle:2000="handleInput2" />
      <p>{{ text2 }}</p>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const val1 = ref<string>()
const text1 = ref<string>()
const handleInput1 = () => {
  text1.value = val1.value
}

const val2 = ref<string>()
const text2 = ref<string>()
const handleInput2 = () => {
  text2.value = val2.value
}
</script>
