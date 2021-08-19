<template>
  <div>
    <a-card :bordered="false" class="w-300px shadow-xl">
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

<script setup>
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue'

const props = defineProps({
  banner: { type: String },
  avatar: { type: String },
  nickname: { type: String },
  bio: { type: String },
})
</script>
