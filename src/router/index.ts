import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import error from '../views/error/404.vue'
import storage from '@/utils/storage'
import { firstMenu } from '@/utils/map-menu'

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
      storage.clear()
      return '/login'
    }
    if (token == 'undefind') {
      storage.clear()
      return '/login'
    }
  }
  if (to.path == '/main') {
    return firstMenu.url
  }
})
export default router
