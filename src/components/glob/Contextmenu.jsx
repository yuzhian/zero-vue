import { defineComponent } from 'vue'

const menuClass = 'min-w-32' // class

export const MenuItem = {
  props: ['menu'],
  setup({ menu: { title, onClick, children } }) {
    if (children && children.length) {
      return () => (
        <a-sub-menu title={title} class={menuClass}>
          {children.map((menu, index) => (
            <MenuItem key={index} menu={menu} />
          ))}
        </a-sub-menu>
      )
    }

    return () => (
      <a-menu-item title={title} onClick={onClick} class={menuClass}>
        {title}
      </a-menu-item>
    )
  },
}

export default defineComponent({
  props: ['menus'],
  render() {
    return (
      <a-dropdown
        trigger={['contextmenu']}
        v-slots={{
          ...this.$slots,
          overlay: () => (
            <a-menu class={menuClass}>
              {this.$props.menus.map((menu, index) => (
                <MenuItem key={index} menu={menu} />
              ))}
            </a-menu>
          ),
        }}
      />
    )
  },
})
