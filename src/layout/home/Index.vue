<template>
  <v-app>

    <c-app-bar />

    <v-main style="padding-top: 0">
      <router-view />
    </v-main>

    <base-to-top />

    <c-footer />

  </v-app>
</template>

<script>
export default {
  components: {
    CAppBar: () => import('./AppBar'),
    CFooter: () => import('./Footer'),
  },
}
</script>
