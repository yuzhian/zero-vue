<template>
  <z-table-pagination
    ref="fullTable"
    :fetch="queryFunc"
    :lazy="true"
    :params="params"
    show-no="编号"
    row-selection
    :columns="columns"
    :row-key="rowKey"
    bordered
    :pagination="{ pageSize: 30 }"
    :locale="{ emptyText: '无数据' }"
    @selection-change="info"
  >
    <template #action="{ record }">
      <a-button type="link" @click="info(record[rowKey])">编辑</a-button>
    </template>
  </z-table-pagination>
</template>

<script>
import { listAndroidArticle } from '@/api/gank'

export default {
  data: () => ({
    queryFunc: listAndroidArticle,
    params: { str: 'abc', arr: [1, 2, 3] },
    columns: [
      { title: '标题', dataIndex: 'title', sorter: true },
      {
        title: '类型',
        dataIndex: 'type',
        filters: [
          { text: '安卓', value: 'Android' },
          { text: '前端', value: 'FrontEnd' },
        ],
      },
      { title: '作者', dataIndex: 'author' },
      { title: '访问量', dataIndex: 'views' },
      {
        title: '操作',
        align: 'center',
        fixed: 'right',
        width: 147,
        slots: { customRender: 'action' },
      },
    ],
    rowKey: '_id',
  }),
  methods: {
    info(...items) {
      console.log(items)
      this.$message.info('已输出到控制台')
    },
  },
}
</script>
