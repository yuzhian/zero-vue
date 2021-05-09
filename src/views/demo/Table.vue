<template>
  <div class="page-container">
    <!-- 表格 -->
    <z-table :fetch="queryFunc" :columns="columns" />
  </div>
</template>

<script>
import { listAndroidArticle } from "@/api/gank";

export default {
  data: () => ({
    queryFunc: listAndroidArticle,
    columns: [
      { title: "title", dataIndex: "title" },
      { title: "type", dataIndex: "type" },
      { title: "author", dataIndex: "author" },
      { title: "views", dataIndex: "views" },
    ],
  }),
};
</script>

<style lang="less" scoped>
.page-container {
  margin: 0.25rem;
}
</style>
