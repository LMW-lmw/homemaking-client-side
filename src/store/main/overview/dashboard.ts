import { Module } from 'vuex'
import { IDashboard } from './type'
import { IRootState } from '@/store/type'

import {
  getCategoryCount,
  getCategoryTop
} from '@/service/main/dashboard/dashboard'

const dashboard: Module<IDashboard, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryCount: [],
      categoryTop: []
    }
  },
  mutations: {
    changeCategoryCount(state, list) {
      state.categoryCount = list
    },
    changeCategoryTop(state, list) {
      state.categoryTop = list
    }
  },
  actions: {
    async getCategoryData({ commit }) {
      const categoryCount = await getCategoryCount()
      const categoryTop = await getCategoryTop()
      // const categoryFavor = await getCategoryFavor()
      // const addressSale = await getAddressSale()
      commit('changeCategoryCount', categoryCount)
      commit('changeCategoryTop', categoryTop)
      // commit('changeCategoryFavor', categoryFavor)
      // commit('changeAddressSale', addressSale)
    }
  }
}

export default dashboard
