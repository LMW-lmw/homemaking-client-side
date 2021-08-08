import {
  useStore,
  mapActions,
  mapGetters,
  mapState,
  mapMutations,
  createNamespacedHelpers
} from 'vuex'
import { computed } from 'vue'

/**
 * @param {Object||Array} stateFun vuex要使用的名字
 * @param {mapActions|mapGetters|mapState|mapMutations} fun 传入vuex的辅助函数
 *
 */
function mapUse(stateFun, fun) {
  const store = useStore()
  const state = {}
  stateFun = fun(stateFun)
  Object.keys(stateFun).forEach((key) => {
    const fn = stateFun[key].bind({ $store: store })
    state[key] = computed(fn)
  })
  return state
}

/**
 * @param {Object||Array} mapper Mutations的名字
 * @param {Object||Array} moduleName 模块的名字
 *
 */
export function useActions(mapper, moduleName) {
  let mapFun = mapActions
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapFun = createNamespacedHelpers(moduleName).mapActions
  }
  return mapFun(mapper)
}

/**
 * @param {Object||Array} mapper Mutations的名字
 * @param {Object||Array} moduleName 模块的名字
 *
 */
export function useGetters(mapper, moduleName) {
  let mapFun = mapGetters
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapFun = createNamespacedHelpers(moduleName).mapGetters
  }
  return mapUse(mapper, mapFun)
}

/**
 * @param {Object||Array} mapper Mutations的名字
 * @param {Object||Array} moduleName 模块的名字
 *
 */
export function useState(mapper, moduleName) {
  let mapFun = mapState
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapFun = createNamespacedHelpers(moduleName).mapState
  }
  return mapUse(mapper, mapFun)
}

/**
 * @param {Object||Array} mapper Mutations的名字
 * @param {Object||Array} moduleName 模块的名字
 *
 */
export function useMutations(mapper, moduleName) {
  let mapFun = mapMutations
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapFun = createNamespacedHelpers(moduleName).mapMutations
  }
  return mapFun(mapper)
}
