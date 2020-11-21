<template>
  <div>
    <c-welcome />
    <c-example />
  </div>
</template>

<script>
export default {
  components: {
    CWelcome: () => import('./Welcome'),
    CExample: () => import('./Example'),
  },
}
</script>
