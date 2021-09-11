import { defineComponent } from 'vue'
import { Pagination } from 'ant-design-vue'

export default defineComponent({
  props: {
    fetch: { type: Function, required: true },
    params: { type: Object, default: () => ({}) },
  },
  data: () => ({
    records: [],
    pagination: { current: 1, pageSize: 10, total: 0 },
  }),
  render() {
    return (
      <div>
        {this.records.map(record => this.$slots.default(record))}
        <Pagination attrs={this.$attrs} v-slots={this.$slots} {...this.pagination} onChange={this.handlePaginationChange} />
      </div>
    )
  },
  created() {
    this.handleFetch()
  },
  methods: {
    handleFetch() {
      this.fetch({ ...this.pagination, ...this.params }).then(resp => {
        this.records = resp[import.meta.env.VITE_PAGINATION_RESULTS]
        this.pagination.current = resp[import.meta.env.VITE_PAGINATION_CURRENT]
        this.pagination.total = resp[import.meta.env.VITE_PAGINATION_TOTAL]
      })
    },
    handlePaginationChange(current, pageSize) {
      this.pagination.current = current
      this.pagination.pageSize = pageSize
      this.handleFetch()
    },
  },
})
