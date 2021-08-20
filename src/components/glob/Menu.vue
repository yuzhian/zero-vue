<script>
import { h } from 'vue'
import { Menu } from 'ant-design-vue'

export default {
  setup(props, { slots, attrs, emit }) {
    const attributes = { class: 'bg-[#ffffff00] select-none border-r-0' }
    return () => h(Menu, attributes, slots)
  },
}
</script>
