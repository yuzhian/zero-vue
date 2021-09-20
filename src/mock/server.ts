import { createServer, Response } from 'miragejs'

const ACCESS_TOKEN = import.meta.env.VITE_REQ_ACCESS_TOKEN as string
const REFRESH_TOKEN = import.meta.env.VITE_REQ_REFRESH_TOKEN as string

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    routes() {
      // 访问令牌测试, 访问令牌可用时将参数返回, 访问令牌失效时返回 401状态 和 access_token_expired
      this.get('/test/:name', (schema, request) =>
        request.requestHeaders[ACCESS_TOKEN] === '1' ? request.params : new Response(401, {}, { code: 'access_token_expired', message: '访问令牌过期' })
      )

      // 刷新访问令牌, 刷新令牌可用时返回新的访问令牌和刷新令牌, 以完成token续期的目的; 刷新令牌也过期时, 返回 401状态 和 refresh_token_expired
      this.get('/auth/refresh', (schema, request) => {
        return request.requestHeaders[REFRESH_TOKEN] === '1'
          ? { access_token: '1', refresh_token: '1' } // (1 可用, 0/其他 失效)
          : new Response(401, {}, { code: 'refresh_token_expired', message: '登录失效, 请重新登录' })
      })

      this.passthrough('https://gank.io/**')
    },
  })

  return server
}
