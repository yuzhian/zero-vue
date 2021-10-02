import store from '../store'

export default function hasPermission(permissions: string[] | string | undefined | null | unknown): boolean {
  if (!permissions) return true
  return store.getters['permission/exists'](permissions)
}
