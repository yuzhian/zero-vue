<template>
  <z-table :fetch="listAndroidArticle" :columns="columns" />
</template>

<script setup>
import { listAndroidArticle } from '@/api/gank'

const columns = [
  { title: '标题', dataIndex: 'title' },
  { title: '类型', dataIndex: 'type' },
  { title: '作者', dataIndex: 'author' },
  { title: '访问量', dataIndex: 'views' },
]
</script>
