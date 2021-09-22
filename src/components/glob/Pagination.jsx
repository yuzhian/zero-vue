import { defineComponent } from 'vue'
import { Pagination, Skeleton } from 'ant-design-vue'
import paginationMixin from '/src/plugins/mixins/pagination.ts'

export default defineComponent({
  mixins: [paginationMixin],
  render() {
    return (
      <div>
        <Skeleton loading={this.loading} active title={false} paragraph={{ rows: this.page.pageSize }}>
          {this.records.map(record => this.$slots.default(record))}
        </Skeleton>
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
