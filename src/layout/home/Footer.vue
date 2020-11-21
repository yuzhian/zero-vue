<template>
  <v-footer dark padless>
    <v-card flat tile class="text-center">
      <v-card-text>
        <v-btn v-for="{icon, href} in contact" :key="icon" class="mx-4" icon :href="href" target="_blank">
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="pt-0">
        {{ introduction }}
      </v-card-text>
      <v-card-text>
        {{ new Date().getFullYear() }} — <strong>zero-vue</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    contact: [
      { icon: 'mdi-twitter', href: 'https://twitter.com' },
      { icon: 'mdi-facebook', href: 'https://www.facebook.com' },
      { icon: 'mdi-sina-weibo', href: 'https://weibo.com' },
      { icon: 'mdi-instagram', href: 'https://www.instagram.com' },
      { icon: 'mdi-reddit', href: 'https://www.reddit.com' },
      { icon: 'mdi-linkedin', href: 'https://www.linkedin.com' },
      { icon: 'mdi-youtube', href: 'https://www.youtube.com' },
    ],
    introduction:
      '“我真傻，真的，”祥林嫂抬起她没有神采的眼睛来，接着说。“我单知道下雪的时候野兽在山坳里没有食吃，会到村里来；我不知道春天也会有。我一清早起来就开了门，拿小篮盛了一篮豆，叫我们的阿毛坐在门槛上剥豆去。他是很听话的，我的话句句听；他出去了。我就在屋后劈柴，掏米，米下了锅，要蒸豆。我叫阿毛，没有应，出去口看，只见豆撒得一地，没有我们的阿毛了。他是不到别家去玩的；各处去一问，果然没有。我急了，央人出去寻。直到下半天，寻来寻去寻到山坳里，看见刺柴上桂着一只他的小鞋。大家都说，糟了，怕是遭了狼了。再进去；他果然躺在草窠里，肚里的五脏已经都给吃空了，手上还紧紧的捏着那只小篮呢。……” 她接着但是呜咽，说不出成句的话来。',
  }),
}
</script>

<style lang="sass" scoped></style>
