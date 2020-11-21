<template>
  <div class="page-container d-flex justify-center align-center" :style="`background: url(${wallpaperApi})`">
    <v-row>
      <v-col cols="3" style="min-width: 32rem">
        <h3 class="text-h3 white--text text-uppercase mb-1" v-text="title" />
      </v-col>
      <v-col cols="5" style="min-width: 32rem">
        <div class="body-1 white--text mb-1" v-text="content" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    wallpaperApi: `https://source.unsplash.com/${screen.width}x${screen.height}`,
    title: 'zero vue - create by yuzhian',
    content:
      'I wrote a piece of nonsense, but no one read it anyway. da nan bian lai le yi ge la ma, shou li ti zhe wu jin ta ma, da bei bian lai le yi ge ya ba, yao li bie zhe yi ge la ba. ti lou ta ma de la ma yao na ta ma qu huan bie zhe la ba de ya ba de la ba, bie zhe la ba de ya ba bu yuan yi na la ba qu huan ti lou ta ma de la ma de ta ma. ti lou ta ma de la ma lun qi ta ma jiu gei le bie zhe la ba de ya ba yi ta ma, bie zhe la ba de ya ba chou chu la ba jiu gei le ti lou ta ma de la ma yi la ba, ye bu zhi shi ti lou ta ma de la ma da le bie zhe la ba de ya ba, hai shi bie zhe la ba de ya ba da le ti lou ta ma de la ma. la ma hui jia dun ta ma, ya ba hui jia di di da da chui la ba.',
  }),
}
</script>

<style lang="sass" scoped>
.page-container
  height: 100vh
  padding: 48px
  background-size: cover
</style>
