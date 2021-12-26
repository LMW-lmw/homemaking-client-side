import { Module } from 'vuex'
import { ILogin } from './type'
import { IRootState } from '../type'
import { IAccount } from '@/service/login/type'
import { login, getUserInfo, getMenus } from '@/service/login/login'
import router from '@/router/index'
import storage from '@/utils/storage'
import { mapRouter, mapMenuPermission } from '@/utils/map-menu'
const loginModule: Module<ILogin, IRootState> = {
  namespaced: true,
  state: {
    token: '',
    userInfo: {},
    menus: [],
    permission: []
  },
  actions: {
    async accountLogin({ commit, dispatch }, payload: IAccount) {
      // 登录存储token
      const loginResult = await login(payload)
      const { id, token } = loginResult
      storage.setItem('token', token, false)
      commit('changeToken', token)
      // 保存初始化部门菜单和角色菜单
      dispatch('getInitList', null, { root: true })
      // 储存用户信息
      const userInfo = await getUserInfo(id)
      storage.setItem('userInfo', userInfo, false)
      commit('changeUserInfo', userInfo)
      // 储存用户权限菜单
      // console.log(userInfo.id)
      const menus = await getMenus(id)
      storage.setItem('menus', menus, false)
      commit('changeMenus', menus)
      // 跳转
      router.push('/main')
    },
    init({ commit, dispatch }) {
      const token = storage.getItem('token', false)
      const userInfo = storage.getItem('userInfo', false)
      const menus = storage.getItem('menus', false)
      if (token) {
        commit('changeToken', token)
        // 保存初始化部门菜单和角色菜单 对应页面刷新操作
        dispatch('getInitList', null, { root: true })
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
      const routes = mapRouter(menus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
      const permission = mapMenuPermission(menus)
      state.permission = permission
    }
  }
}

export default loginModule
