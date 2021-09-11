import { defineComponent } from 'vue'
import { Table } from 'ant-design-vue'

export default defineComponent({
  props: {
    columns: { type: Array, default: () => [] },
    rowKey: { type: [String, Function], default: () => (item, index) => item[import.meta.env.VITE_ROWKEY_DEFAULT] || index },
  },
  render() {
    return <Table columns={this.columns} rowKey={this.rowKey} attrs={this.$attrs} v-slots={this.$slots} />
  },
})
