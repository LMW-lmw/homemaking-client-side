import { Module } from 'vuex'
import { IDashboard } from './type'
import { IRootState } from '@/store/type'

import {
  getCategoryCount,
  getCategorySale,
  getCategoryFavor,
  getAddressSale
} from '@/service/main/dashboard/dashboard'

const dashboard: Module<IDashboard, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryCount: [],
      categorySale: [],
      categoryFavor: [],
      addressSale: []
    }
  },
  mutations: {
    changeCategoryCount(state, list) {
      state.categoryCount = list
    },
    changeCategorySale(state, list) {
      state.categorySale = list
    },
    changeCategoryFavor(state, list) {
      state.categoryFavor = list
    },
    changeAddressSale(state, list) {
      state.addressSale = list
    }
  },
  actions: {
    async getCategoryData({ commit }) {
      const categoryCount = await getCategoryCount()
      const categorySale = await getCategorySale()
      const categoryFavor = await getCategoryFavor()
      const addressSale = await getAddressSale()
      commit('changeCategoryCount', categoryCount)
      commit('changeCategorySale', categorySale)
      commit('changeCategoryFavor', categoryFavor)
      commit('changeAddressSale', addressSale)
    }
  }
}

export default dashboard
