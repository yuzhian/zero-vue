import { defineComponent } from 'vue'
import { PaginationProps } from 'ant-design-vue'

/**
 * 在支持 antdv table 组件所有功能的前提下扩展
 * - 自动组装查询项, 拉取数据, 处理结果集(由父组件提供请求函数和结果集映射)
 * - 常用附加列配置, 并使用 props 参数控制
 */
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
      records: [] as Array<any>, // 结果集
      selectedRowKeys: [] as Array<string>, // 已选
      paginationData: { total: 0, current: 1, pageSize: 20, ...this.pagination } as PaginationProps, // 分页参数
      filters: [] as object[], // 过滤参数
      sorter: {}, // 排序参数
    }
  },
  computed: {
    computedColumns() {
      let pres = []
      if (this.showNo) {
        const title: string = typeof this.showNo === 'string' ? this.showNo : '#'
        pres.push({ title, width: `${2.5 + title.length}em`, customRender: ({ index }: any) => parseInt(index) + 1 })
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
      <a-table
        dataSource={this.records}
        columns={this.computedColumns}
        pagination={this.paginationData}
        rowKey={(item: any, index: number) => item[this.rowKey] || index}
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
      this.fetch({ ...this.paginationData, ...this.filters, ...this.sorter, ...this.params }).then((resp: any) => {
        this.records = resp[import.meta.env.VITE_PAGINATION_RESULTS as string] as any[]
        this.paginationData.current = resp[import.meta.env.VITE_PAGINATION_CURRENT as string] as number
        this.paginationData.total = resp[import.meta.env.VITE_PAGINATION_TOTAL as string] as number
      })
    },
    // 处理 分页 过滤 排序 条件变化
    handleConditionChange(pagination: PaginationProps, filters: Object[], { field, order }: any) {
      this.paginationData = pagination
      this.filters = filters
      this.sorter = { field, order }
      this.handleFetch()
    },
    // 处理 复选框 变化
    handleSelectionChange(selectedRowKeys: string[], selectedRows: string[]) {
      this.selectedRowKeys = selectedRowKeys
      this.$emit('selectionChange', selectedRowKeys, selectedRows)
    },
  },
})
