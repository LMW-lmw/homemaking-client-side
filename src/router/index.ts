import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import error from '../views/error/404.vue'
import storage from '@/utils/storage'
// import store from '@/store'
// import { mapRouter } from '@/utils/map-menu'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/:pathMatch(.*)',
    name: 'error',
    component: error
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/main/main.vue')
    // children: [
    //   {
    //     path: 'analysis/overview',
    //     name: 'overview',
    //     component: () => import('@/view/main/analysis/overview/overview.vue')
    //   },
    //   {
    //     path: 'system/user',
    //     name: 'user',
    //     component: () => import('@/view/main/system/user/user.vue')
    //   }
    // ]
  }
]
const router = createRouter({
  routes,
  history: createWebHistory()
})
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = storage.getItem('token', false) || storage.getItem('token')
    if (!token) {
      return '/login'
    }
  }
  // userMenus => routes
  // const userMenus = (store.state as any).login.menus
  // const routes = mapRouter(userMenus)

  // // 将routes => router.main.children
  // routes.forEach((route) => {
  //   console.log(route)
  //   router.addRoute('main', route)
  // })
})
export default router
