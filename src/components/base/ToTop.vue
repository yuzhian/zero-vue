<template>
  <v-card class="py-2 px-4" v-show="fab" fab color="#000000cc" dark flat width="100">
    <v-icon large v-scroll="onScroll" @click="$vuetify.goTo(0)">
      mdi-arrow-up-bold
    </v-icon>
  </v-card>
</template>

<script>
export default {
  name: 'ToTop',
  data: () => ({
    fab: false,
  }),
  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
  },
}
</script>

<style lang="sass" scoped>
.v-card
  position: fixed
  z-index: 999
  bottom: 10vh
  right: -36px
</style>
