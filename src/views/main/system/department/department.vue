<template>
  <div class="department">
    <page-search :formConfig="formConfig" pageName="Department"></page-search>
    <page-content
      :contentConfig="contentConfig"
      pageName="Department"
      @editBtnClick="editBtnClick"
    >
      <template #handle>
        <el-button type="primary" @click="addClick">添加部门</el-button>
      </template>
    </page-content>
    <page-dialog
      :dialogConfig="dialogConfig"
      ref="dialogRef"
      :infoInit="infoInit"
      pageName="Department"
    ></page-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import pageDialog from '@/components/page-dialog'

import { contentConfig } from './config/content-config'
import { formConfig } from './config/search-config'
import { dialogConfig } from './config/dialog-config'

import { useDialog } from '@/hook/use-dialog'
export default defineComponent({
  name: 'department',
  components: {
    pageSearch,
    pageContent,
    pageDialog
  },
  setup() {
    const [dialogRef, infoInit, addClick, editBtnClick] = useDialog()
    return {
      contentConfig,
      formConfig,
      dialogRef,
      infoInit,
      addClick,
      editBtnClick,
      dialogConfig
    }
  }
})
</script>

<style scoped></style>
