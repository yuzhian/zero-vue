<template>
  <div>
    <a-card :bordered="false" class="user-card">
      <template #cover>
        <img :src="banner" :width="300" :height="200" />
      </template>
      <template class="ant-card-actions" #actions>
        <setting-outlined key="setting" />
        <edit-outlined key="edit" />
        <ellipsis-outlined key="ellipsis" />
      </template>
      <a-card-meta :title="nickname" :description="bio">
        <template #avatar>
          <a-avatar :src="avatar" />
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  name: 'ManagementLayout',
  components: {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
  },
  props: {
    banner: {
      type: String,
      default: JSON.parse(localStorage.getItem('userinfo'))['banner'],
    },
    avatar: {
      type: String,
      default: JSON.parse(localStorage.getItem('userinfo'))['avatar'],
    },
    nickname: {
      type: String,
      default: JSON.parse(localStorage.getItem('userinfo'))['nickname'],
    },
    bio: {
      type: String,
      default: JSON.parse(localStorage.getItem('userinfo'))['bio'],
    },
  },
})
</script>

<style lang="scss" scoped>
.user-card {
  width: 300px;
  cursor: pointer;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
