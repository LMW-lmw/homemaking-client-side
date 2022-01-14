import { Module } from 'vuex'
import { ISystem } from './type'
import { IRootState } from '@/store/type'
import { ElMessage } from 'element-plus'
import {
  createData,
  deletData,
  editData,
  getPageListData
} from '@/service/main/system/system'
const systemModule: Module<ISystem, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      workerList: [],
      workerCount: 0,
      menuList: [],
      departmentList: [],
      departmentCount: 0,
      categoryList: [],
      categoryCount: 0
    }
  },
  mutations: {
    changeUsersList(state, list: any[]) {
      state.usersList = list
    },
    changeUsersCount(state, count: number) {
      state.usersCount = count
    },
    changeRoleList(state, list: any[]) {
      state.roleList = list
    },
    changeRoleCount(state, count: number) {
      state.roleCount = count
    },
    changeWorkerList(state, list: any[]) {
      state.workerList = list
    },
    changeWorkerCount(state, count: number) {
      state.workerCount = count
    },
    changeMenuList(state, list: any[]) {
      state.menuList = list
    },
    changeDepartmentList(state, list: any[]) {
      state.departmentList = list
    },
    changeDepartmentCount(state, count: number) {
      state.departmentCount = count
    },
    changeCategoryList(state, list: any[]) {
      state.categoryList = list
    },
    changeCategoryCount(state, count: number) {
      state.categoryCount = count
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName.toLowerCase()}List`]
      }
    },
    listCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName.toLowerCase()}Count`]
      }
    }
  },
  actions: {
    async getList({ commit }, payload: any) {
      // 获取数据
      const pageName = payload.pageName
      const url = `${pageName.toLowerCase()}/list`
      const pageData = await getPageListData(url, payload.queryInfo)
      const { list, totalCount } = pageData
      commit(`change${pageName}List`, list)
      if (pageName !== 'Menu') {
        commit(`change${pageName}Count`, totalCount)
      }
    },
    async deletDataAction(context, payload: any) {
      // 删除数据
      const { id, pageName, searchData } = payload
      const name = pageName.toLowerCase()
      const url = `/${name}/${id}`
      const data = await deletData(url)
      context.dispatch('getList', {
        pageName,
        queryInfo: searchData
      })
      if (data) {
        // console.log(data)
        if (data.response) {
          ElMessage.error({
            message: '删除失败',
            type: 'error',
            showClose: true,
            duration: 2000
          })
        } else {
          ElMessage.success({
            message: '删除成功',
            type: 'success',
            showClose: true,
            duration: 2000
          })
        }
      }
    },
    async createDataAction(context, payload: any) {
      // 添加数据
      const { pageName, newData } = payload
      const url = `/${pageName.toLowerCase()}`
      const data = await createData(url, newData)
      if (data) {
        // console.log(data)
        if (data.response) {
          ElMessage.error({
            message: '添加失败',
            type: 'error',
            showClose: true,
            duration: 2000
          })
        } else {
          ElMessage.success({
            message: '添加成功',
            type: 'success',
            showClose: true,
            duration: 2000
          })
        }
      }
      context.dispatch('getList', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editDataAction(context, payload: any) {
      // 编辑数据
      const { pageName, editInfo, id, searchData } = payload
      const url = `/${pageName.toLowerCase()}/${id}`
      const data = await editData(url, editInfo)
      if (data) {
        if (data.response) {
          ElMessage.error({
            message: '修改失败',
            type: 'error',
            showClose: true,
            duration: 2000
          })
        } else {
          ElMessage.success({
            message: '修改成功',
            type: 'success',
            showClose: true,
            duration: 2000
          })
        }
      }
      context.dispatch('getList', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10,
          ...searchData
        }
      })
    }
  }
}

export default systemModule
