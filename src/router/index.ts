import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import error from '../view/error/404.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
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

export default router
