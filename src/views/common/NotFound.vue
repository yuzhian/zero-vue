<template>
  <main>
    <a-result status="404" title="页面丢失" sub-title="抱歉，您访问的页面不存在。">
      <template #extra>
        <a-button type="primary" @click="$router.back(-1)">
          返回上一页
        </a-button>
        <a-button @click="$router.push('/')">
          去首页
        </a-button>
      </template>
    </a-result>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
