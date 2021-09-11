import { defineComponent } from 'vue'

export const MenuItem = {
  props: ['menu'],
  setup({ menu: { title, onClick, children } }) {
    if (children && children.length) {
      return () => (
        <a-sub-menu title={title} min-w='32'>
          {children.map((menu, index) => (
            <MenuItem key={index} menu={menu} />
          ))}
        </a-sub-menu>
      )
    }

    return () => (
      <a-menu-item title={title} onClick={onClick} min-w='32'>
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
            <a-menu min-w='32'>
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
