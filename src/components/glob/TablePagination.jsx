import { defineComponent } from 'vue'
import { Table } from 'ant-design-vue'

export default defineComponent({
  props: {
    // 覆写 antdv 属性
    columns: { type: Array, default: () => [] }, // 显示列
    pagination: { type: Object, default: () => ({}) }, // 分页参数
    rowKey: { type: String, default: import.meta.env.VITE_ROWKEY_DEFAULT }, // 操作项标记列名, 多选等操作以此列数据返回
    rowSelection: { type: [Boolean, Object] }, // 复选框, 选项
    // 自定义属性
    fetch: { type: Function, required: true }, // 请求函数
    params: { type: Object, default: () => ({}) }, // 参数
    showNo: { type: [Boolean, String] }, // 序号, 标题
  },
  data() {
    return {
      records: [], // 结果集
      selectedRowKeys: [], // 已选
      paginationData: { total: 0, current: 1, pageSize: 20, ...this.pagination }, // 分页参数
      filters: [], // 过滤参数
      sorter: {}, // 排序参数
    }
  },
  computed: {
    computedColumns() {
      let pres = []
      if (this.showNo) {
        const title = typeof this.showNo === 'string' ? this.showNo : '#'
        pres.push({ title, width: `${2.5 + title.length}em`, customRender: ({ index }) => parseInt(index) + 1 })
      }
      return [...pres, ...this.columns]
    },
    computedRowSelection() {
      if (!this.rowSelection) return
      // 接管选中结果集和选框变化函数
      const overlay = {
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.handleSelectionChange,
      }
      return typeof this.rowSelection === 'boolean' ? overlay : { ...Object(this.rowSelection), ...overlay }
    },
  },
  render() {
    return (
      <Table
        dataSource={this.records}
        columns={this.computedColumns}
        pagination={this.paginationData}
        rowKey={(item, index) => item[this.rowKey] || index}
        rowSelection={this.computedRowSelection}
        attrs={this.$attrs}
        v-slots={this.$slots}
        onChange={this.handleConditionChange}
      />
    )
  },
  created() {
    this.handleFetch()
  },
  methods: {
    // 查询
    handleFetch() {
      this.fetch({ ...this.paginationData, ...this.filters, ...this.sorter, ...this.params }).then(resp => {
        this.records = resp[import.meta.env.VITE_PAGINATION_RESULTS]
        this.paginationData.current = resp[import.meta.env.VITE_PAGINATION_CURRENT]
        this.paginationData.total = resp[import.meta.env.VITE_PAGINATION_TOTAL]
      })
    },
    // 处理 分页 过滤 排序 条件变化
    handleConditionChange(pagination, filters, { field, order }) {
      this.paginationData = pagination
      this.filters = filters
      this.sorter = { field, order }
      this.handleFetch()
    },
    // 处理 复选框 变化
    handleSelectionChange(selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.$emit('selectionChange', selectedRowKeys, selectedRows)
    },
  },
})
