import { Module } from 'vuex'
import { ILogin } from './type'
import { IRootState } from '../type'
import { IAccount } from '@/service/login/type'
import { login, getUserInfo, getMenus } from '@/service/login/login'
import router from '@/router/index'
import storage from '@/utils/storage'
import { mapRouter } from '@/utils/map-menu'
const loginModule: Module<ILogin, IRootState> = {
  namespaced: true,
  state: {
    token: '',
    userInfo: {},
    menus: ''
  },
  actions: {
    async accountLogin({ commit }, payload: IAccount) {
      const loginResult = await login(payload)
      const { id, token } = loginResult
      storage.setItem('token', token, false)
      commit('changeToken', token)
      const userInfo = await getUserInfo(id)
      storage.setItem('userInfo', userInfo, false)
      commit('changeUserInfo', userInfo)
      const menus = await getMenus(userInfo.role.id)
      storage.setItem('menus', menus, false)
      commit('changeMenus', menus)
      router.push('/main')
    },
    init({ commit }) {
      const token = storage.getItem('token', false)
      const userInfo = storage.getItem('userInfo', false)
      const menus = storage.getItem('menus', false)
      if (token) {
        commit('changeToken', token)
      }
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      if (menus) {
        commit('changeMenus', menus)
      }
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, info) {
      state.userInfo = info
    },
    changeMenus(state, menus) {
      state.menus = menus
      // console.log(menus)
      const routes = mapRouter(menus)
      // console.log(routes)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  }
}

export default loginModule
