<template>
  <main display="flex" justify="center" items="center" h="screen">
    <a-result status="403" title="无权限" sub-title="抱歉，您无权访问此页面。">
      <template #extra>
        <a-button type="primary" @click="$router.back()">返回上一页</a-button>
        <a-button @click="$router.push('/')">去首页</a-button>
      </template>
    </a-result>
  </main>
</template>

<script setup lang="ts"></script>
