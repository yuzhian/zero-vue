<script>
export default {
  render() {
    return (
      <a-table
        props={{
          ...this.$attrs,
          dataSource: this.dataSource,
          columns: this.completeColumns,
          rowSelection: this.completeRowSelection,
          rowKey: (item, index) => item[this.rowKey] || index,
          change: this.handleConditionChange,
          pagination: this.pagination,
        }}
        on={this.$listeners}
        scopedSlots={this.$scopedSlots}
      />
    );
  },
  props: {
    // query
    fetch: { type: Function },
    params: { type: Object, default: () => ({}) },
    // result mapping
    columns: { type: Array, default: () => [] },
    // extension options
    rowKey: { type: String, default: "id" }, // 多选时存到 selectedRowKeys 中的值的名称
    rowNo: { type: Boolean }, // 显示序号
    rowSelection: [Object, Boolean], // 显示复选框
    // pagination
    total: { type: Number, default: 0 },
    current: { type: Number, default: 1 },
    pageSize: { type: Number, default: 20 },
  },
  data() {
    return {
      // 结果集
      dataSource: [],
      selectedRowKeys: [],
      // 分页参数
      pagination: {
        total: this.total,
        current: this.current,
        pageSize: this.pageSize,
      },
      // 过滤参数
      filters: {},
      // 排序参数
      sorter: {},
    };
  },
  computed: {
    // 根据自定义参数重构表格列
    completeColumns() {
      // 显示行号
      if (this.rowNo) {
        const calc = (t, r, i) => parseInt(i) + 1;
        const no = { title: "序号", width: 60, customRender: calc };
        return [no].concat(this.columns);
      }
      // todo other...
      return this.columns;
    },
    // 覆盖多行复选框调用方的修改, 由组件接管选中结果集和选框更改回调
    completeRowSelection() {
      if (!this.rowSelection) return;
      let append = {
        selectedRowKeys: this.selectedRowKeys, // 已选结果集
        onChange: this.handleSelectionChange, // 选框更改回调
      };
      return typeof this.rowSelection === Boolean.name.toLowerCase()
        ? append
        : { ...this.rowSelection, ...append };
    },
  },
  created() {
    this.handleFetch();
  },
  methods: {
    // 查询
    handleFetch() {
      if (!this.fetch) {
        throw "undefined fetch function";
      }
      this.fetch({
        ...this.pagination,
        ...this.filters,
        ...this.sorter,
        ...this.params,
      }).then((resp) => {
        this.dataSource = resp[process.env.VUE_APP_PAGINATION_RESULTS];
        this.pagination.current = resp[process.env.VUE_APP_PAGINATION_CURRENT];
        this.pagination.total = resp[process.env.VUE_APP_PAGINATION_TOTAL];
      });
    },
    // 处理 分页 过滤 排序 条件变化
    handleConditionChange(pagination, filters, { field, order }) {
      this.pagination = pagination;
      this.filters = filters;
      this.sorter = { field, order };
      this.handleFetch();
    },
    // 处理复选框变化
    handleSelectionChange(selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys;
      this.$emit("checked-change", selectedRowKeys, selectedRows);
    },
  },
};
</script>
