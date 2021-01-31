<template>
  <a-menu :theme="theme" :mode="mode" :style="{ background: '#ffffff00', lineHeight: '64px' }"
    v-model:selectedKeys="current">
    <a-menu-item v-for="({ name, path, meta }) of routes" :key="path" @click="$router.push(path)">
      {{ meta && meta.title || name || path }}
    </a-menu-item>
    <div style="float: right;">
      <slot name="rightPanel" />
    </div>
  </a-menu>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    routes: {
      type: Array,
      default: () => [],
    },
    theme: {
      type: String,
      default: 'light',
    },
    mode: {
      type: String,
      default: 'inline',
    },
  },
  data() {
    return {
      current: [this.$route.path],
    }
  },
  watch: {
    $route: {
      handler({ path }) {
        this.current = [path]
      },
    },
  },
})
</script>

<style lang="scss" scoped>
.ant-menu-item-selected {
  background-color: rgba(255, 255, 255, 0.2) !important;
}
</style>
