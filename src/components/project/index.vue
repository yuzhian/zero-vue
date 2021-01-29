<template>
  <a-card title="系统信息" style="width: 100%;">
    <dependencies title="项目依赖" :dependencies="dependencies" />
    <br>
    <dependencies title="开发依赖" :dependencies="devDependencies" />
  </a-card>
</template>

<script>
import { dependencies, devDependencies } from '/package.json'
import { defineComponent } from 'vue'
import Dependencies from './Dependencies.vue'

export default defineComponent({
  name: 'ProjectInfo',
  components: {
    Dependencies,
  },
  data: () => ({
    dependencies: dependencies,
    devDependencies: devDependencies,
  }),
})
</script>
