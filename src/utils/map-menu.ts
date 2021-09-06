import { RouteRecordRaw } from 'vue-router'
import { IBreadcrumb } from '@/components/breadcrumb/type/breadcrumb'
let firstMenu: any = null

// 根据服务器返回的菜单做动态路由注册
export function mapRouter(menus: any[]): RouteRecordRaw[] {
  const routers: RouteRecordRaw[] = []
  const allRouter: RouteRecordRaw[] = []
  const routeFile = require.context('../router/main', true, /\.ts/)
  routeFile.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRouter.push(route.default)
  })
  const getRoute = (menus: any) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRouter.find((route) => {
          return route.path === menu.url
        })
        if (route) {
          routers.push(route)
        }
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        getRoute(menu.children)
      }
    }
  }
  getRoute(menus)
  return routers
}

// 获取面包屑菜单
export function getBreadMenu(userMenus: any[], currentPath: string): any {
  const breadcrumbs: IBreadcrumb[] = []
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = getBreadMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs.push({ name: menu.name })
        breadcrumbs.push({ name: findMenu.name })
        return breadcrumbs
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

// 取出所有第三级菜单
export function mapMenuPermission(userMenus: any[]): any[] {
  const permission: string[] = []
  const getPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        getPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permission.push(menu.permission)
      }
    }
  }
  getPermission(userMenus)
  return permission
}

// 取出根菜单的叶子节点
export function checkMenus(menuList: any[]): number[] {
  const list: number[] = []
  const recursionMenu = (menus: any[]) => {
    for (const item of menus) {
      if (item.children) {
        recursionMenu(item.children)
      } else {
        list.push(item.id)
      }
    }
  }
  recursionMenu(menuList)
  return list
}
export { firstMenu }
