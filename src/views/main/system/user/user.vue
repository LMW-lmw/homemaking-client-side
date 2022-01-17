<template>
  <div class="user">
    <page-search
      :formConfig="searchConfigComputed"
      pageName="Users"
    ></page-search>
    <page-content
      :contentConfig="contentConfig"
      pageName="Users"
      @editBtnClick="editBtnClick"
      @update="update"
      ref="pageContentRef"
    >
      <template #status="data">
        <el-button
          size="mini"
          plain
          :type="data.back.enable === 1 ? 'success' : 'danger'"
          @click="changeUserEnable(data.back)"
          v-if="isUpdate"
        >
          {{ data.back.enable ? '启用' : '禁用' }}
        </el-button>
        <span v-else>
          {{ data.back.enable ? '启用' : '禁用' }}
        </span>
      </template>
      <template #handle>
        <el-button type="primary" @click="addClick">添加用户</el-button>
      </template>
    </page-content>
    <page-dialog
      :dialogConfig="dialogConfigComputed"
      ref="dialogRef"
      :infoInit="infoInit"
      pageName="Users"
      :searchData="searchData"
    ></page-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'

import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import pageDialog from '@/components/page-dialog'

import { formConfig } from './config/search-config'
import { contentConfig } from './config/content-config'
import { dialogConfig } from './config/dialog-config'

import { useDialog } from '@/hook/use-dialog'
import { useStore } from '@/store'
import emitter from '@/utils/mitt'
export default defineComponent({
  name: 'user',
  components: { pageSearch, pageContent, pageDialog },
  setup() {
    const store = useStore()
    // 输入框的信息
    let searchData: any = ref({})
    let pageContentRef = ref<InstanceType<typeof pageContent>>()
    emitter.on(`searchUsersInfo`, (formData) => {
      // console.log('user: ', formData)
      searchData.value = formData
      console.log('user: ', searchData.value)
    })
    watch(
      () => pageContentRef.value?.paginationInfo,
      (newValue: any) => {
        if (newValue) {
          searchData.value.offset = newValue.pageCurrent * newValue.pageSize
          searchData.value.size = newValue.pageSize
        }
      },
      {
        deep: true
      }
    )
    //控制添加和编辑框password输入框显示和隐藏
    const addCallBack = () => {
      const passwordItem = dialogConfig.formItems.find(
        (item) => item.field === 'password'
      )
      if (passwordItem) {
        passwordItem.isHidden = false
      }
    }
    const editCallback = () => {
      const passwordItem = dialogConfig.formItems.find(
        (item) => item.field === 'password'
      )
      if (passwordItem) {
        passwordItem.isHidden = true
      }
    }

    const [dialogRef, infoInit, addClick, editBtnClick] = useDialog(
      addCallBack,
      editCallback
    )
    // 添加部门和角色菜单
    const dialogConfigComputed = computed(() => {
      const departmentItem = dialogConfig.formItems.find(
        (item) => item.field === 'department'
      )
      const roleItem = dialogConfig.formItems.find(
        (item) => item.field === 'role'
      )
      if (departmentItem) {
        departmentItem.options = store.state.department.map((item) => {
          return { title: item.name, value: item.name }
        })
      }
      if (roleItem) {
        roleItem.options = store.state.role.map((item) => {
          return { title: item.name, value: item.name }
        })
      }
      return dialogConfig
    })
    // 修改用户状态
    const changeUserEnable = (data: any) => {
      let info = { ...data }
      const { cellphone, enable, name, realname, roleId, departmentId } = info
      const editInfo = {
        cellphone,
        enable,
        name,
        realname,
        roleId,
        departmentId
      }
      const id = info.id
      if (editInfo.enable === 1) {
        editInfo.enable = 0
        store.dispatch('system/editDataAction', {
          pageName: 'Users',
          editInfo: editInfo,
          id,
          searchData: searchData.value
        })
      } else {
        editInfo.enable = 1
        store.dispatch('system/editDataAction', {
          pageName: 'Users',
          editInfo: editInfo,
          id,
          searchData: searchData.value
        })
      }
    }
    const searchConfigComputed = computed(() => {
      const roleItem = formConfig.formItems.find(
        (item) => item.field === 'role'
      )
      if (roleItem) {
        roleItem.options = store.state.role.map((item) => {
          return { title: item.name, value: item.name }
        })
      }
      return formConfig
    })

    let isUpdate = ref()
    let update = (value: any) => {
      isUpdate.value = value
    }
    return {
      formConfig,
      contentConfig,
      dialogConfigComputed,
      addClick,
      editBtnClick,
      dialogRef,
      infoInit,
      changeUserEnable,
      searchConfigComputed,
      isUpdate,
      update,
      searchData,
      pageContentRef
    }
  }
})
</script>

<style scoped lang="less">
.user {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
