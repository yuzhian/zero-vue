import { Component } from 'vue'

/**
 * 分页处理
 */
export default {
  props: {
    params: { type: Object, default: () => ({}) }, // 参数
    fetch: { type: Function, required: true }, // 请求函数
  },
  data() {
    return {
      records: [], // 结果集
      loading: false, // 加载状态
      page: {}, // 分页参数
      filters: [], // 过滤参数
      sorter: {}, // 排序参数
    }
  },
  methods: {
    // 查询
    handleFetch() {
      this.loading = true
      this.fetch({ ...this.page, ...this.filters, ...this.sorter, ...this.params })
        .then((resp: any) => {
          this.records = resp[import.meta.env.VITE_PAGINATION_RESULTS as string]
          this.page.current = resp[import.meta.env.VITE_PAGINATION_CURRENT as string]
          this.page.total = resp[import.meta.env.VITE_PAGINATION_TOTAL as string]
        })
        .finally(() => {
          this.loading = false
        })
    },
    // 初始化
    init(pagination: Object) {
      this.page = { current: 1, pageSize: 20, total: 0, ...pagination }
      this.handleFetch()
    },
    // 处理 分页 过滤 排序 条件变化
    handleChange(pagination: any, filters: any[] = [], { field, order }: any = {}) {
      this.page = pagination
      this.filters = filters
      this.sorter = { field, order }
      this.handleFetch()
    },
  },
} as Component
