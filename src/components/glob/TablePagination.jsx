import { defineComponent } from 'vue'
import paginationMixin from '@/plugins/mixins/pagination.ts'
import Table from './Table'

export default defineComponent({
  mixins: [paginationMixin],
  props: {
    pagination: { type: Object, default: () => ({}) }, // 分页参数
  },
  render() {
    return (
      <Table dataSource={this.records} pagination={this.page} attrs={this.$attrs} v-slots={this.$slots} loading={this.loading} onChange={this.handleChange} />
    )
  },
  created() {
    this.init(this.pagination)
  },
})
