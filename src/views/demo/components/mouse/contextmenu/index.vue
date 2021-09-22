<template>
  <main h="full">
    <z-contextmenu :menus="menus">
      <div h="full" w="full" bg="blue-100"></div>
    </z-contextmenu>
  </main>
</template>

<script setup lang="ts">
function log(message: any) {
  console.log(message)
}

const menus = [
  {
    title: '第一项(目录)',
    onClick: () => log('第一项'),
    children: [
      { title: '长字符串长字符串长字符串长字符串长字符串长字符串长字符串长字符串', onClick: () => log('长字符串') },
      {
        title: '嵌套目录',
        children: [
          { title: '子项', onClick: () => log('子项') },
          {
            title: '多层嵌套',
            children: [
              { title: '子项一', onClick: () => log('子项一') },
              { title: '子项二', onClick: () => log('子项二') },
              { title: '子项三', onClick: () => log('子项三') },
            ],
          },
        ],
      },
    ],
  },
  { title: '第二项(目录为空)', onClick: () => log('第二项'), children: [] },
  { title: '第三项(菜单项)', onClick: () => log('第三项') },
  { title: '第四项(无点击事件)' },
]
</script>
