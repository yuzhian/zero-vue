<template>
  <div class="layout-container">
    <home-carousel v-if="$route.path === '/'" />
    <a-affix :offset-top="0">
      <menu-bar />
    </a-affix>
    <router-view />
  </div>
</template>

<script>
import HomeCarousel from "./HomeCarousel.vue";
import MenuBar from "./MenuBar.vue";

export default {
  components: { MenuBar, HomeCarousel },
};
</script>

<style scoped>
.layout-container {
  height: 100vh;
}
</style>
