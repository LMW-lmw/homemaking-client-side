import { RouteRecordRaw } from 'vue-router'

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
      } else {
        getRoute(menu.children)
      }
    }
  }
  // const getRoute = (menus: any) => {
  //   for (const menu of menus) {
  //     if (menu.type === 2) {
  //       const route = allRouter.find((route) => route.path === menu.url)
  //       if (route) routers.push(route)
  //     } else {
  //       getRoute(menu.children)
  //     }
  //   }
  // }
  getRoute(menus)
  return routers
}

// export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
//   const routes: RouteRecordRaw[] = []

//   // 1.先去加载默认所有的routes
//   const allRoutes: RouteRecordRaw[] = []
//   const routeFiles = require.context('../router/main', true, /\.ts/)
//   routeFiles.keys().forEach((key) => {
//     const route = require('../router/main' + key.split('.')[1])
//     allRoutes.push(route.default)
//   })

//   // 2.根据菜单获取需要添加的routes
//   // userMenus:
//   // type === 1 -> children -> type === 1
//   // type === 2 -> url -> route

//   const getRoute = (menus: any) => {
//     for (const menu of menus) {
//       if (menu.type === 2) {
//         const route = allRouter.find((route) => {
//           return (route.path = menu.url)
//         })
//         if (route) {
//           routers.push(route)
//         }
//       } else {
//         getRoute(menu.children)
//       }
//     }
//   }
//   const _recurseGetRoute = (menus: any[]) => {
//     for (const menu of menus) {
//       if (menu.type === 2) {
//         const route = allRoutes.find((route) => route.path === menu.url)
//         if (route) routes.push(route)
//       } else {
//         _recurseGetRoute(menu.children)
//       }
//     }
//   }

//   _recurseGetRoute(userMenus)

//   return routes
// }
