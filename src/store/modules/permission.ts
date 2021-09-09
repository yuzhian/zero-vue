const PERMISSIONS_KEY: string = 'permissions'

const state = {
  permissions: JSON.parse(localStorage.getItem(PERMISSIONS_KEY) || '[]') as string[],
}

const getters = {
  exists: (state: any) => (permissions: string[]) => {
    return state.permissions.some((permission: string) => permissions.includes(permission))
  },
}

const mutations = {
  permissions(state: any, data: any) {
    state.permissions = data
    localStorage.setItem(PERMISSIONS_KEY, JSON.stringify(data))
  },
  clearPermissions(state: any) {
    state.permissions = []
    localStorage.removeItem(PERMISSIONS_KEY)
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
