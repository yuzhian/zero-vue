const USERINFO_KEY: string = 'userinfo'
const TOKEN_KEY: string = 'token'

const state = {
  userinfo: JSON.parse(localStorage.getItem(USERINFO_KEY) || '{}'),
  token: localStorage.getItem(TOKEN_KEY),
}

const getters = {
  userinfo: (state: any) => {
    return state.userinfo
  },
}

const mutations = {
  userinfo(state: any, data: any) {
    state.userinfo = data
    localStorage.setItem(USERINFO_KEY, JSON.stringify(data))
  },
  clearUserinfo(state: any) {
    state.userinfo = {}
    localStorage.removeItem(USERINFO_KEY)
  },

  token(state: any, token: string) {
    state.token = token
    localStorage.setItem(TOKEN_KEY, token)
  },
  clearToken(state: any) {
    state.token = ''
    localStorage.removeItem(TOKEN_KEY)
  },
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
