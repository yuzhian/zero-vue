<template>
  <!-- 表格 -->
  <z-table
    :fetch="queryFunc"
    :columns="columns"
    :params="params"
    show-no
    row-selection
    row-key="_id"
    :scroll="scroll"
  />
</template>

<script>
import { listAndroidArticle } from "@/api/gank";

export default {
  data: () => ({
    queryFunc: listAndroidArticle,
    params: {},
    columns: [
      { title: "title", dataIndex: "title", sorter: true },
      {
        title: "type",
        dataIndex: "type",
        filters: [
          { text: "安卓", value: "Android" },
          { text: "前端", value: "FrontEnd" },
        ],
      },
      { title: "author", dataIndex: "author" },
      { title: "views", dataIndex: "views" },
    ],
    scroll: { y: document.body.clientHeight - 118 },
  }),
};
</script>
