<template>
  <div>复杂表格</div>
  <z-table
    ref="fullTable"
    :fetch="queryFunc"
    :lazy="true"
    :params="params"
    row-no="编号"
    row-selection
    :columns="columns"
    :row-key="rowKey"
    bordered
    :pagination="{ pageSize: 30 }"
    :locale="{ emptyText: '无数据' }"
    @selection-change="info"
  >
    <template #action="{record}">
      <a-button type="link" @click="info(record[rowKey])">编辑</a-button>
    </template>
  </z-table>
  <a-button v-if="btn" block @click="loadData">加载表格数据</a-button>
  <div>简单表格</div>
  <z-table :fetch="queryFunc" :columns="columns.slice(0, columns.length - 1)" />
</template>

<script>
import { listAndroidArticle } from '@/api/gank'

export default {
  data: () => ({
    queryFunc: listAndroidArticle,
    params: { str: 'abc', arr: [1, 2, 3] },
    columns: [
      { title: 'title', dataIndex: 'title', sorter: true },
      {
        title: 'type',
        dataIndex: 'type',
        filters: [
          { text: '安卓', value: 'Android' },
          { text: '前端', value: 'FrontEnd' },
        ],
      },
      { title: 'author', dataIndex: 'author' },
      { title: 'views', dataIndex: 'views' },
      {
        title: '操作',
        align: 'center',
        fixed: 'right',
        width: 147,
        slots: { customRender: 'action' },
      },
    ],
    rowKey: '_id',
    btn: true,
  }),
  methods: {
    info(...items) {
      this.$message.info(JSON.stringify(items))
    },
    loadData() {
      this.$refs.fullTable.handleFetch()
      this.btn = false
    },
  },
}
</script>