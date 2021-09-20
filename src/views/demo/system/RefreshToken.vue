<template>
  <ContrastPre :left="store.state.account.token" :right="state.responses">
    <!-- 设置令牌状态 -->
    <template #left>
      <a-switch
        v-model:checked="state.token.access_token"
        checked-value="1"
        un-checked-value="0"
        checked-children="访问令牌可用"
        un-checked-children="访问令牌过期"
        @change="handleUpdateToken"
      />
      <a-switch
        v-model:checked="state.token.refresh_token"
        checked-value="1"
        un-checked-value="0"
        checked-children="刷新令牌可用"
        un-checked-children="刷新令牌过期"
        @change="handleUpdateToken"
      />
    </template>

    <!-- 请求接口 -->
    <template #right>
      <a-button @click="handleRequest('a')">请求接口A</a-button>
      <a-button @click="handleRequest('b')">请求接口B</a-button>
      <a-button @click="handleRequest('c')">请求接口C</a-button>

      <a-button type="primary" @click="handleRequest('a', 'b', 'c')">同时请求</a-button>
    </template>
  </ContrastPre>
</template>

<script setup>
import { reactive, watchEffect } from 'vue'
import request from '/src/plugins/request.ts'
import store from '/src/store/index.ts'

import ContrastPre from '@/components/ContrastPre.vue'

const state = reactive({ token: { ...store.state.account.token }, responses: [] })
watchEffect(() => (state.token = { ...store.state.account.token }))

const handleUpdateToken = () => {
  store.commit('account/token', { ...state.token })
}

const handleRequest = (...params) => {
  Promise.all(params.map(param => request.get(`/test/${param}`))).then(responses => {
    state.responses = responses
  })
}
</script>
