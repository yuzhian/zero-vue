<template>
  <main class="h-screen" :style="style"></main>
</template>

<script setup>
const style = {
  background: `url(https://source.unsplash.com/${screen.width}x${screen.height})`,
  // background: `url(https://api.ixiaowai.cn/mcapi/mcapi.php)`,
  backgroundSize: 'cover',
}
</script>
