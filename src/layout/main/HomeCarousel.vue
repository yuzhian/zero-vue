<template>
  <a-carousel autoplay>
    <div v-for="i in 4" :key="i">
      <h3>{{ i }}</h3>
    </div>
  </a-carousel>
</template>

<style scoped>
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: calc(100vh - 63px);
  line-height: calc(100vh - 63px);
  background: #000000cc;
}

.ant-carousel >>> .slick-slide h3 {
  color: #ffffffcc;
}
</style>
