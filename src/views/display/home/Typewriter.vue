<template>
  <section position="relative" h="screen" :style="style">
    <pre font="mono" position="absolute" top="80" right="20" h="32" w="96" p="8" bg="[#ffffff7f]" backdrop="saturate-[180%] blur-xl filter" shadow="xl" />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Typed, { TypedOptions } from 'typed.js' // 打字效果
import hljs from 'highlight.js/lib/common' // 高亮

import 'highlight.js/styles/atom-one-light.css' // 高亮css

const highlight = (text: string, lang: string): string => hljs.highlight(text, { language: lang }).value

const code0 = `public void mai`
const code1 = `public static void main(String[] args) {
    System.out.println("hello world!");
}`
let typed: Typed
const options: TypedOptions = {
  strings: [highlight(code0, 'java'), highlight(code1, 'java')],
  showCursor: false,
  typeSpeed: 40,
  backSpeed: 20,
}

onMounted(() => {
  typed = new Typed('pre', options)
})

const style = {
  background: `url(https://source.unsplash.com/7JX0-bfiuxQ)`,
  // background: `url(https://source.unsplash.com/${screen.width}x${screen.height})`,
  // background: `url(https://api.ixiaowai.cn/mcapi/mcapi.php)`,
  backgroundSize: 'cover',
}
</script>
