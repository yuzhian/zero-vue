<template>
  <!-- 表格 -->
  <z-table
    :fetch="queryFunc"
    :columns="columns"
    :params="params"
    row-no
    row-selection
    :row-key="rowKey"
    :scroll="scroll"
    @checked-change="print"
  >
    <template #action="text, record">
      <a-button type="link" @click="print(record[rowKey])">编辑</a-button>
    </template>
  </z-table>
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
      {
        title: "操作",
        align: "center",
        fixed: "right",
        width: 147,
        scopedSlots: { customRender: "action" },
      },
    ],
    rowKey: "_id",
    scroll: { y: document.body.clientHeight - 118 },
  }),
  methods: {
    print(...items) {
      console.log(items);
    },
  },
};
</script>
