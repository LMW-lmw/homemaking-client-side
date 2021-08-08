import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import error from '../view/error/404.vue'
import storage from '@/utils/storage'

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
    component: () => import('../view/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../view/main/main.vue')
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
})
export default router
