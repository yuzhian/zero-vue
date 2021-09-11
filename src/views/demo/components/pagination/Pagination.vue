<template>
  <z-pagination :fetch="listAndroidArticle" :pageSize="50">
    <template v-slot="{ title }">
      <p>{{ title }}</p>
    </template>
    <!-- <template #itemRender="{ page }"> {{ page }} </template> -->
  </z-pagination>
</template>

<script setup>
import { listAndroidArticle } from '@/api/gank'
</script>
