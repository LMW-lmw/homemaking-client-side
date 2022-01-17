<template>
  <div class="role">
    <page-search :formConfig="formConfig" pageName="Role"></page-search>
    <page-content
      :contentConfig="contentConfig"
      pageName="Role"
      @editBtnClick="editBtnClick"
    >
      <template #handle>
        <el-button type="primary" @click="addClick">添加角色</el-button>
      </template>
    </page-content>
    <page-dialog
      pageName="Role"
      :dialogConfig="dialogConfig"
      :infoInit="infoInit"
      :otherInfo="roleInfo"
      ref="dialogRef"
    >
      <el-tree
        :data="menuList"
        show-checkbox
        node-key="id"
        :props="{ children: 'children', label: 'name' }"
        @check="roleCheck"
        ref="treeRef"
      >
      </el-tree>
    </page-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'
import { useStore } from 'vuex'

import pageContent from '@/components/page-content'
import pageSearch from '@/components/page-search'
import pageDialog from '@/components/page-dialog'

import { ElTree } from 'element-plus'

import { contentConfig } from './config/content-config'
import { formConfig } from './config/search-config'
import { dialogConfig } from './config/dialog-config'

import { useDialog } from '@/hook/use-dialog'
import { checkMenus } from '@/utils/map-menu'
export default defineComponent({
  name: 'role',
  components: { pageContent, pageSearch, pageDialog },
  setup() {
    const store = useStore()
    const treeRef = ref<InstanceType<typeof ElTree>>()
    const menuList = computed(() => store.state.menu)
    const editCallBack = (item: any) => {
      const key = checkMenus(item.menuList)
      console.log(key)
      roleInfo.value.menuList = key
      // console.log(key)
      nextTick(() => {
        treeRef.value?.setCheckedKeys(key, false)
      })
    }
    const [dialogRef, infoInit, addClick, editBtnClick] = useDialog(
      undefined,
      editCallBack
    )
    const roleInfo = ref<any>({
      menuList: []
    })
    const roleCheck = (allMenu?: any, checkMenu?: any) => {
      const checkedKeys = checkMenu.checkedKeys
      const halfCheckedKeys = checkMenu.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      roleInfo.value = { menuList }
      console.log(roleInfo.value)
    }
    return {
      contentConfig,
      formConfig,
      dialogConfig,
      addClick,
      infoInit,
      editBtnClick,
      dialogRef,
      menuList,
      roleCheck,
      roleInfo,
      treeRef
    }
  }
})
</script>

<style scoped>
.role {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
