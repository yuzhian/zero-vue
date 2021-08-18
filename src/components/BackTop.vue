<template>
  <a-back-top class="back-top-btn">
      <VerticalAlignTopOutlined />
  </a-back-top>
</template>

<script setup>
import { VerticalAlignTopOutlined } from '@ant-design/icons-vue'
</script>

<style lang="scss" scoped>
.back-top-btn {
  position: fixed;
  right: 60px;
  bottom: 60px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 24px;
  text-align: center;
  transition: all 0.3s;
  color: #333333cc;
  z-index: 20;
  &:hover {
    transform: translateY(-2px);
  }
}
</style>