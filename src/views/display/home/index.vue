<template>
  <main :style="style"></main>
</template>

<script setup>
const style = {
  background: `url(https://source.unsplash.com/${screen.width}x${screen.height})`,
  // background: `url(https://api.ixiaowai.cn/mcapi/mcapi.php)`,
  backgroundSize: 'cover',
}
</script>

<style lang="scss" scoped>
main {
  height: 100vh;
}
</style>
