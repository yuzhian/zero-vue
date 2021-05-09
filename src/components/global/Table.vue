<script>
/**
 * 在支持 antdv table 组件所有功能的前提下扩展
 * - 自动组装查询项, 拉取数据, 处理结果集(由父组件提供请求函数和结果集映射)
 * - 常用附加列配置, 并使用 props 参数控制
 */
export default {
  render() {
    return (
      <a-table
        props={{
          ...this.$attrs,
          dataSource: this.dataSource,
          pagination: this.paginationData,
          columns: this.computedColumns,
          rowSelection: this.computedRowSelection,
          rowKey: (item, index) => item[this.rowKey] || index,
        }}
        on={{
          ...this.$listeners,
          change: this.handleConditionChange,
        }}
        scopedSlots={this.$scopedSlots}
      />
    );
  },
  props: {
    // antdv
    columns: { type: Array, default: () => [] },
    pagination: { type: Object, default: () => ({}) },
    rowKey: { type: String, default: "id" },
    // custom
    fetch: { type: Function, required: true },
    lazy: { type: Boolean, default: false },
    params: { type: Object, default: () => ({}) },
    rowNo: { type: [Boolean, String] }, // 序号, 标题
    rowSelection: { type: [Boolean, Object] }, // 复选框, 选项
  },
  data() {
    return {
      // 结果集
      dataSource: [],
      selectedRowKeys: [],
      // 分页参数
      paginationData: {
        total: 0,
        current: 1,
        pageSize: 20,
        ...this.pagination,
      },
      // 过滤参数
      filters: {},
      // 排序参数
      sorter: {},
    };
  },
  computed: {
    computedColumns() {
      let columns = [];
      this.rowNo &&
        columns.push({
          title: typeof this.rowNo === "string" ? this.rowNo : "序号",
          width: 60,
          customRender: (t, r, i) => parseInt(i) + 1,
        });
      columns.push.apply(columns, this.columns);
      return columns;
    },
    computedRowSelection() {
      if (!this.rowSelection) return;
      // 接管选中结果集和选框变化函数
      const overlay = {
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.handleSelectionChange,
      };
      return typeof this.rowSelection === "boolean"
        ? overlay
        : { ...this.rowSelection, ...overlay };
    },
  },
  created() {
    if (!this.lazy) {
      this.handleFetch();
    }
  },
  methods: {
    // 查询
    handleFetch() {
      this.fetch({
        ...this.paginationData,
        ...this.filters,
        ...this.sorter,
        ...this.params,
      }).then((resp) => {
        this.dataSource = resp[process.env.VUE_APP_PAGINATION_RESULTS];
        this.paginationData.current =
          resp[process.env.VUE_APP_PAGINATION_CURRENT];
        this.paginationData.total = resp[process.env.VUE_APP_PAGINATION_TOTAL];
      });
    },
    // 处理 分页 过滤 排序 条件变化
    handleConditionChange(pagination, filters, { field, order }) {
      this.paginationData = pagination;
      this.filters = filters;
      this.sorter = { field, order };
      this.handleFetch();
    },
    // 处理 复选框 变化
    handleSelectionChange(selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys;
      this.$emit("selection-change", selectedRowKeys, selectedRows);
    },
  },
};
</script>
