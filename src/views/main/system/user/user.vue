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
    >
      <template #status="data">
        <el-button
          size="mini"
          plain
          :type="data.back.enable === 1 ? 'success' : 'danger'"
          @click="changeUserEnable(data.back)"
        >
          {{ data.back.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #handle>
        <el-button type="primary" @click="addClick">添加用户</el-button>
      </template>
      <!-- <template #department="data">
        <span>
          {{
            $store.state.department.find(
              (item) => item.id === data.back.departmentId
            )?.name
          }}
        </span>
      </template> -->
      <!-- <template #role="data">
        <span>
          {{
            $store.state.role.find((item) => item.id === data.back.roleId)?.name
          }}
        </span>
      </template> -->
    </page-content>
    <page-dialog
      :dialogConfig="dialogConfigComputed"
      ref="dialogRef"
      :infoInit="infoInit"
      pageName="Users"
    ></page-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

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
    let searchData: any = ''
    emitter.on(`searchUsersInfo`, (formData) => {
      searchData = formData
    })
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
      console.log(info)
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
          searchData
        })
      } else {
        editInfo.enable = 1
        store.dispatch('system/editDataAction', {
          pageName: 'Users',
          editInfo: editInfo,
          id,
          searchData
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
    return {
      formConfig,
      contentConfig,
      dialogConfigComputed,
      addClick,
      editBtnClick,
      dialogRef,
      infoInit,
      changeUserEnable,
      searchConfigComputed
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
