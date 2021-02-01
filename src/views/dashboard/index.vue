<template>
  <main class="page-main">
    <a-alert type="info" :message="message" :description="description" show-icon closable style="margin-bottom: 0.5rem">
      <template #icon>
        <smile-outlined />
      </template>
    </a-alert>
    <a-card title="系统信息" :style="{ width: '100%' }">
      <dependencies title="项目依赖" :dependencies="dependencies" />
      <br>
      <dependencies title="开发依赖" :dependencies="devDependencies" />
    </a-card>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { dependencies, devDependencies } from '/package.json'

import Dependencies from './Dependencies.vue'

import { SmileOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  name: 'Home',
  components: {
    Dependencies,
    SmileOutlined,
  },
  data: () => ({
    dependencies: dependencies,
    devDependencies: devDependencies,
    message: '“我真傻，真的，”祥林嫂抬起她没有神采的眼睛来，接着说。',
    description:
      '“我单知道下雪的时候野兽在山坳里没有食吃，会到村里来；我不知道春天也会有。我一清早起来就开了门，拿小篮盛了一篮豆，叫我们的阿毛坐在门槛上剥豆去。他是很听话的，我的话句句听；他出去了。我就在屋后劈柴，掏米，米下了锅，要蒸豆。我叫阿毛，没有应，出去口看，只见豆撒得一地，没有我们的阿毛了。他是不到别家去玩的；各处去一问，果然没有。我急了，央人出去寻。直到下半天，寻来寻去寻到山坳里，看见刺柴上桂着一只他的小鞋。大家都说，糟了，怕是遭了狼了。再进去；他果然躺在草窠里，肚里的五脏已经都给吃空了，手上还紧紧的捏着那只小篮呢。……” 她接着但是呜咽，说不出成句的话来。',
  }),
})
</script>

<style lang="scss" scoped>
.page-main {
  height: 1000vh;
}
</style>
