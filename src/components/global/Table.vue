<template>
  <a-table
    :data-source="results"
    :columns="columns"
    :pagination="pagination"
    :rowKey="(item, index) => index"
    @change="handleChange"
  />
</template>

<script>
export default {
  props: {
    // 查询函数
    fetch: { type: Function, default: () => {} },
    columns: { type: Array, default: () => [] },
    total: { type: Number, default: 0 },
    current: { type: Number, default: 1 },
    pageSize: { type: Number, default: 20 },
  },
  data() {
    return {
      // 结果集
      results: [],
      // 分页参数
      pagination: {
        total: this.total,
        current: this.current,
        pageSize: this.pageSize,
      },
    };
  },
  created() {
    this.handleQuery();
  },
  methods: {
    handleQuery() {
      this.fetch(this.pagination).then((resp) => {
        this.results = resp[process.env.VUE_APP_PAGINATION_RESULTS];
        this.pagination.current = resp[process.env.VUE_APP_PAGINATION_CURRENT];
        this.pagination.total = resp[process.env.VUE_APP_PAGINATION_TOTAL];
      });
    },
    handleChange(pagination) {
      this.pagination = pagination;
      this.handleQuery();
    },
  },
};
</script>
