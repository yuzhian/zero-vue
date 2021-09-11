<template>
  <z-table :data-source="records" :columns="columns">
    <template #action="{ record }">
      <a-button type="link" @click="() => $message.info(record['_id'])">编辑</a-button>
    </template>
  </z-table>
</template>

<script>
import { defineComponent } from 'vue'

const columns = [
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
  { title: '操作', align: 'center', fixed: 'right', width: 147, slots: { customRender: 'action' } },
]

export default defineComponent({
  data: () => ({
    records: [],
    columns: columns,
    selectedRowKeys: [],
  }),
  created() {
    fetch('https://gank.io/api/v2/data/category/GanHuo/type/Android/page/1/count/10?current=1&pageSize=10&total=0')
      .then((response) => response.json())
      .then((json) => {
        this.records = json.data
      })
  },
  methods: {},
})
</script>
