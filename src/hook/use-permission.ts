import { useStore } from '@/store'

// 判断用户是否拥有某权限 用于控制功能按钮的显示和隐藏
export function usePermission(pageName: string, hanlde: string) {
  const store = useStore()
  const permission = store.state.login.permission
  const nowPermission = `system:${pageName}:${hanlde}`
  return !!permission.find((item) => item === nowPermission)
}
