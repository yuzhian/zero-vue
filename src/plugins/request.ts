import Axios, { AxiosRequestConfig } from 'axios'
import { message } from 'ant-design-vue'

import store from '../store'

const ACCESS_TOKEN = import.meta.env.VITE_REQ_ACCESS_TOKEN as string
const REFRESH_TOKEN = import.meta.env.VITE_REQ_REFRESH_TOKEN as string

const instance = Axios.create({
  baseURL: import.meta.env.BASE_URL,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  timeout: 5000,
})

const requests: Array<Function> = []
let refreshing = false

/**
 * 访问令牌过期时无感刷新, 首次响应令牌过期时刷新令牌, 后续请求等令牌刷新后重新请求
 * @param config axios config, see: https://axios-http.com/zh/docs/req_config
 * @returns request promise
 */
async function rerequestOnTokenExpired(config: AxiosRequestConfig): Promise<any> {
  if (refreshing) {
    return new Promise(resolve =>
      requests.push(function (token: string) {
        config.headers[ACCESS_TOKEN] = token
        resolve(instance(config))
      })
    )
  }
  refreshing = true
  const headers: any = {}
  headers[REFRESH_TOKEN] = store.getters['account/refreshToken']
  return instance
    .get('/auth/refresh', { headers })
    .then(response => {
      store.commit('account/token', response)
      const accessToken = store.getters['account/accessToken']
      config.headers[ACCESS_TOKEN] = accessToken
      // 重新请求此接口
      const nextResp = instance(config)
      // 重新请求其他接口
      while (requests && requests.length) {
        requests.shift()?.(accessToken)
      }
      return nextResp
    })
    .catch(() => store.commit('account/clearToken'))
    .finally(() => (refreshing = false))
}

instance.interceptors.request.use(
  config => {
    config.headers[ACCESS_TOKEN] = store.getters['account/accessToken']
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    let { config, response } = error
    switch (response ? response.status : 0) {
      case 401:
        switch (response.data['code']) {
          case 'access_token_expired':
            return rerequestOnTokenExpired(config)
          case 'refresh_token_expired':
            // 跳转登录页 / 打开登录框
            break
          default:
            break
        }
        break
      case 404:
        // 提示 请求地址出错: ${config.url}
        break

      default:
      // 没收到等, 网络错误
    }
    message.error(response.data['message'])
    return Promise.reject(error)
  }
)

export default instance
