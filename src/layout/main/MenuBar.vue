<template>
  <a-menu
    v-model="current"
    mode="horizontal"
    theme="dark"
    :style="menuStyle"
    @click="({ key }) => $router.push({ name: key })"
  >
    <a-menu-item v-for="menu in menus" :key="menu.name">
      {{ menu.meta.title }}
    </a-menu-item>
  </a-menu>
</template>

<script>
import main from "@/router/main.js";

export default {
  data() {
    const menus = main.filter(({ meta }) => meta && meta.menu);
    const current = this.$route.matched
      .map(({ name }) => name)
      .filter((name) => name);
    return {
      menus,
      current,
      menuStyle: {
        lineHeight: "64px",
        backgroundColor: "#000000cc",
        color: "#ffffffcc",
        backdropFilter: "saturate(180%) blur(20px)",
        "-webkit-backdrop-filter": "saturate(180%) blur(20px)",
      },
    };
  },
};
</script>
