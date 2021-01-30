<template>
    <a-collapse :style="{ width: '60%', margin: '20px 20vw' }">
      <a-collapse-panel key="1" header="name">
        <p>{{ $route.name }}</p>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="fullPath">
        <p>{{ $route.fullPath }}</p>
      </a-collapse-panel>
      <a-collapse-panel key="3" header="meta">
        <p>{{ $route.meta }}</p>
      </a-collapse-panel>
    </a-collapse>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  created() {
    console.log(this.$route)
  },
})
</script>
