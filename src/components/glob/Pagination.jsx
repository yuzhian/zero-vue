import { defineComponent } from 'vue'
import { Pagination } from 'ant-design-vue'
import paginationMixin from '@/plugins/mixins/pagination.ts'

export default defineComponent({
  mixins: [paginationMixin],
  render() {
    return (
      <div>
        {this.records.map(record => this.$slots.default(record))}
        <Pagination attrs={this.$attrs} v-slots={this.$slots} {...this.page} onChange={this.handlePaginationChange} />
      </div>
    )
  },
  created() {
    this.init(this.$attrs)
  },
  methods: {
    handlePaginationChange(current, pageSize) {
      this.handleChange({ ...this.page, current, pageSize })
    },
  },
})
