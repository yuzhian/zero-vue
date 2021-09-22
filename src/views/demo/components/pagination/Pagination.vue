<template>
  <z-pagination :fetch="listAndroidArticle" :pageSize="50">
    <template v-slot="{ title }">
      <p>{{ title }}</p>
    </template>
    <!-- <template #itemRender="{ page }"> {{ page }} </template> -->
  </z-pagination>
</template>

<script setup lang="ts">
import { listAndroidArticle } from '/src/api/gank'
</script>
