import { useStore } from '@/store'

export function usePermission(pageName: string, hanlde: string) {
  const store = useStore()
  const permission = store.state.login.permission
  const nowPermission = `system:${pageName}:${hanlde}`
  return !!permission.find((item) => item === nowPermission)
}
