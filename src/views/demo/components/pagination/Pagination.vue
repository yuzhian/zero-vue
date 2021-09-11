<template>
  <z-pagination :fetch="listAndroidArticle">
    <template v-slot="{ title }">
      <p>{{ title }}</p>
    </template>
    <!-- <template #itemRender="{ page }"> {{ page }} </template> -->
  </z-pagination>
</template>

<script setup>
import { listAndroidArticle } from '@/api/gank.js'
</script>
