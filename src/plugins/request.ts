import Axios from 'axios'
import store from '../store'

const TOKEN_KEY = 'token'

const service = Axios.create({
  baseURL: import.meta.env.BASE_URL,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  timeout: 5000,
})

service.interceptors.request.use(
  config => {
    config.headers[TOKEN_KEY] = store.state.account.token 
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    let { response } = error
    console.log(response)
    switch (response ? response.status : 0) {
      case 401:
        // 登录问题, to-login
        break

      case 404:
        // 提示 请求地址出错: ${config.url}
        break

      default:
      // 没收到等, 网络错误
    }
    return Promise.reject(error)
  }
)

export default service
