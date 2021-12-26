import { createStore, useStore as storeUse, Store } from 'vuex'
import { IRootState, IRoot } from './type'
import login from './login/login'
import system from './main/system/system'
import dashboard from './main/overview/dashboard'

import { getPageListData } from '@/service/main/system/system'
const store = createStore<IRootState>({
  state() {
    return {
      name: '',
      age: '18',
      department: [],
      category: [],
      role: [],
      menu: []
    }
  },
  mutations: {
    changeDepartment(state, list) {
      state.department = list
    },
    changeCategory(state, list) {
      state.category = list
    },
    changeRole(state, list) {
      state.role = list
    },
    changeMenu(state, list) {
      state.menu = list
    }
  },
  getters: {},
  actions: {
    async getInitList({ commit }) {
      const department = await getPageListData('/department/list', {
        offset: 0,
        size: 100
      })
      const role = await getPageListData('/role/list', {
        offset: 0,
        size: 100
      })
      const category = await getPageListData('/category/list', {
        offset: 0,
        size: 100
      })
      const menuResult = await getPageListData('/menu/list', {})
      const { list: menuList } = menuResult
      const { list: departmentList } = department
      const { list: roleList } = role
      const { list: categoryList } = category
      commit('changeDepartment', departmentList)
      commit('changeRole', roleList)
      commit('changeMenu', menuList)
      commit('changeCategory', categoryList)
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
})

// 用于将token等一些数据储存在session中
// 在main中使用
export function setupStore() {
  store.dispatch('login/init')
}
export function useStore(): Store<IRoot> {
  return storeUse()
}
export default store
