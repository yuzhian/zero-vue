<template>
  <a-menu :theme="theme" :mode="mode" class="router-tree" v-model:selectedKeys="current">
    <a-menu-item v-for="({ name, path, meta }) of routes" :key="path" @click="$router.push(path)">
      <component v-if="meta && meta.icon" :is="antIcons[meta.icon]" />
      <component v-else :is="antIcons['BorderOuterOutlined']" />
      {{ meta && meta.title || name || path }}
    </a-menu-item>
    <div style="float: right;">
      <slot name="rightPanel" />
    </div>
  </a-menu>
</template>

<script>
import { defineComponent } from 'vue'
import * as antIcons from '@ant-design/icons-vue'

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
      antIcons: antIcons,
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
.router-tree {
  background: #ffffff00;
  line-height: 64px;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

.ant-menu-item-selected {
  background-color: rgba(255, 255, 255, 0.2) !important;
}
</style>
