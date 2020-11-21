<template>
  <v-navigation-drawer v-bind="$attrs" v-on="$listeners" fixed temporary>

    <v-list>
      <v-list-item v-for="({ path, meta: { title } }, index) in routers" :key="index" :to="path">
        <v-list-item-content>
          <v-list-item-title v-text="title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-spacer />

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block outlined color="primary">
          <v-icon left>mdi-domain</v-icon> 控制台
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    routers: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
