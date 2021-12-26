<template>
  <div class="category">
    <page-search :formConfig="formConfig" pageName="Category"></page-search>
    <page-content
      pageName="Category"
      :contentConfig="contentConfig"
      @editBtnClick="editBtnClick"
    >
      <template #handle>
        <el-button type="primary" @click="addClick">添加行业</el-button>
      </template>
    </page-content>
    <page-dialog
      pageName="Category"
      ref="dialogRef"
      :dialogConfig="dialogConfig"
      :infoInit="infoInit"
    ></page-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import pageDialog from '@/components/page-dialog'

import { formConfig } from './config/search-config'
import { contentConfig } from './config/content-config'
import { dialogConfig } from './config/dialog-config'

import { useDialog } from '@/hook/use-dialog'

export default defineComponent({
  components: { pageContent, pageDialog, pageSearch },
  name: 'category',
  setup() {
    const [dialogRef, infoInit, addClick, editBtnClick] = useDialog()
    return {
      contentConfig,
      dialogRef,
      infoInit,
      addClick,
      editBtnClick,
      dialogConfig,
      formConfig
    }
  }
})
</script>

<style scoped>
.category {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
