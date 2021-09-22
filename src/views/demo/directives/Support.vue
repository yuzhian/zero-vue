<template>
  <a-table :dataSource="dataSource" :columns="columns" :rowKey="({ stat }: any) => stat" :pagination="false">
    <template #action="{ record }">
      <a-button type="link" v-support:[record.stat]="'A'">'A'</a-button>
      <a-button type="link" v-support:[record.stat]="'B'">'B'</a-button>
      <a-button type="link" v-support:[record.stat]="'C'">'C'</a-button>
      <a-button type="link" v-support:[record.stat]="'D'">'D'</a-button>
      <a-button type="link" v-support:[record.stat]="['A', 'B']">['A', 'B']</a-button>
      <a-button type="link" v-support:[record.stat]="['A', 'B', 'C']">['A', 'B', 'C']</a-button>
    </template>
  </a-table>
</template>

<script setup lang="ts">
const dataSource = 'ABCD'.split('').map(item => ({ stat: item }))

const columns = [
  { title: 'stat', key: 'stat', dataIndex: 'stat' },
  { title: 'action', key: 'action', slots: { customRender: 'action' } },
]
</script>
