import { defineComponent } from 'vue'
import { Dropdown, Menu, SubMenu, MenuItem } from 'ant-design-vue'

export const Items = {
  props: ['menu'],
  setup({ menu: { title, onClick, children } }) {
    if (children && children.length) {
      return () => (
        <SubMenu title={title} min-w='32'>
          {children.map((menu, index) => (
            <Items key={index} menu={menu} />
          ))}
        </SubMenu>
      )
    }

    return () => (
      <MenuItem title={title} onClick={onClick} min-w='32'>
        {title}
      </MenuItem>
    )
  },
}

export default defineComponent({
  props: ['menus'],
  render() {
    return (
      <Dropdown
        trigger={['contextmenu']}
        v-slots={{
          ...this.$slots,
          overlay: () => (
            <Menu min-w='32'>
              {this.$props.menus.map((menu, index) => (
                <Items key={index} menu={menu} />
              ))}
            </Menu>
          ),
        }}
      />
    )
  },
})
