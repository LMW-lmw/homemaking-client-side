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
 * @param {Object||Array} stateFun
 * @param {mapActions|mapGetters|mapState|mapMutations} fun 传入vuex的辅助函数
 *
 */
function mapUse(stateFun: any, fun: any): any {
  const store = useStore()
  const state: any = {}
  stateFun = fun(stateFun)
  Object.keys(stateFun).forEach((key: any) => {
    const fn = stateFun[key].bind({ $store: store })
    state[key] = computed(fn)
  })
  return state
}

/**
 * @param {Object||Array} mapper state的名字
 * @param {Object||Array} moduleName 模块的名字
 *
 */
export function useState(mapper: any, moduleName?: string): any {
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
export function useActions(mapper: any, moduleName?: string): any {
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
export function useGetters(mapper: any, moduleName?: string): any {
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
export function useMutations(mapper: any, moduleName?: string): any {
  let mapFun = mapMutations
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapFun = createNamespacedHelpers(moduleName).mapMutations
  }
  return mapFun(mapper)
}
