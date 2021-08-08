import { createStore, useStore as storeUse, Store } from 'vuex'
import { IRootState, IRoot } from './type'
import login from './login/login'
const store = createStore<IRootState>({
  state() {
    return {
      name: '',
      age: '18'
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})
export function setupStore() {
  store.dispatch('login/init')
}
export function useStore(): Store<IRoot> {
  return storeUse()
}
export default store
