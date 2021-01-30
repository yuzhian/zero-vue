<template>
  <main :style="style">
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  data: () => ({
    // style: { background: `url(https://source.unsplash.com/${screen.width}x${screen.height})` },
    style: { background: `url(https://api.ixiaowai.cn/mcapi/mcapi.php)`, backgroundSize: 'cover' },
  }),
})
</script>

<style lang="scss" scoped>
main {
  height: 100vh;
}
</style>
