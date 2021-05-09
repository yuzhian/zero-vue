<template>
  <a-table
    v-bind="$attrs"
    :data-source="dataSource"
    :pagination="pagination"
    :columns="showNo ? columnsWithNo : columns"
    :row-key="(item, index) => item[rowKey] || index"
    :row-selection="completeRowSelection"
    @change="handleConditionChange"
  />
</template>

<script>
export default {
  props: {
    // query
    fetch: { type: Function, default: () => {} },
    params: { type: Object, default: () => ({}) },
    // result mapping
    columns: { type: Array, default: () => ({}) },
    // extension options
    showNo: { type: Boolean, default: false }, // 显示序号
    rowSelection: [Object, Boolean], // 多行复选框参数
    rowKey: { type: String, default: "id" }, // 多选时存到 selectedRowKeys 中的值的名称
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
      // 过滤
      filters: {},
      // 排序
      sorter: {},
    };
  },
  computed: {
    columnsWithNo() {
      return [
        {
          title: "序号",
          width: 60,
          align: "center",
          customRender: (t, r, index) => parseInt(index) + 1,
        },
      ].concat(this.columns);
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
    handleSelectionChange(selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys;
    },
  },
};
</script>
