<template>
  <div>
    <v-app-bar app dense id="app-bar">
      <!-- 侧边栏 -->
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
      <v-toolbar-title class="app-bar-logo" @click="$router.push('/')">
        zero-vue
      </v-toolbar-title>

      <!-- 标签 -->
      <div>
        <v-tabs class="hidden-sm-and-down" color="text--primary" background-color="transparent" optional>
          <v-tab v-for="({ name, meta: { title } }, index) in routers" :key="index" v-show="name !== 'home'"
            :to="{ name }" :ripple="false" active-class="text--primary" text>
            {{ title }}
          </v-tab>
        </v-tabs>
      </div>

      <v-spacer />

      <!-- 搜索框 -->
      <v-text-field hide-details dense flat solo prepend-inner-icon="mdi-magnify" placeholder="检索"
        class="shrink ma-2 app-bar-search" background-color="grey lighten-4" />

      <!-- 入口 -->
      <v-btn class="hidden-sm-and-down ma-2" outlined tile color="primary">
        <v-icon left>mdi-domain</v-icon> 控制台
      </v-btn>
    </v-app-bar>

    <!-- 侧栏 -->
    <c-drawer v-model="drawer" :routers="routers" id="drawer" />
  </div>
</template>

<script>
import publicRouter from '@/router/public'

export default {
  components: {
    CDrawer: () => import('./Drawer'),
  },
  data: () => ({
    routers: JSON.parse(JSON.stringify(publicRouter)),
    drawer: null,
  }),
}
</script>

<style lang="scss" scoped>
#app-bar {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  background: #ffffffcc;
}

.app-bar-logo {
  cursor: pointer;
  margin-right: 1rem;
  -moz-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.v-tab {
  &::before {
    display: none;
  }
}

.app-bar-search {
  width: 16rem;
  transition: all 0.25s ease-out;
  &:focus-within {
    width: 20rem;
  }
}
</style>
