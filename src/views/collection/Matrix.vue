<template>
  <div h="full" w="full" v-resize="handleResize">
    <canvas id="canvas" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const chars = 'abcdefghijklmnopqrstuvwxyz0123456789' // 字符串
const fontSize = 16 // 文字大小
const mask = 'rgba(243, 244, 246, 0.1)' // 蒙层
const color = '#333333' // 文字颜色

let width = 0 // 外层容器宽
let height = 0 // 高

let canvas: HTMLCanvasElement // canvas 元素
let ctx: CanvasRenderingContext2D | null // canvas 元素 2D 渲染上下文
let timer: number // 定时器

let columns: number[] = [] // 每列位置
let colunm = 0 // 列数

onMounted(() => {
  canvas = document.getElementById('canvas') as HTMLCanvasElement
  ctx = canvas.getContext('2d')
  timer = setInterval(() => execute(), 30)
})

const execute = () => {
  if (!ctx) return
  ctx.font = `${fontSize}px`
  ctx.fillStyle = mask
  ctx.fillRect(0, 0, width, height)
  ctx.fillStyle = color
  for (let i = 0; i < colunm; i++) {
    const x = i * fontSize
    const y = columns[i] * fontSize
    ctx.fillText(char(), x, y)
    columns[i] = y >= height && Math.random() > 0.95 ? 0 : columns[i] + 1
  }
}

/**
 * 尺寸变化, 重设宽高和列
 */
const handleResize = (entities: ResizeObserverEntry[]) => {
  canvas.height = height = entities[0].contentRect.height
  canvas.width = width = entities[0].contentRect.width
  colunm = Math.ceil(width / fontSize)
  for (let i = 0; i < colunm; i++) {
    columns[i] || (columns[i] = height)
  }
}

// 随机字符
const char = () => chars[Math.floor(Math.random() * chars.length)]
</script>
