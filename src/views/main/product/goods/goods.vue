<template>
  <div class="goods">
    <page-search :formConfig="formConfig" pageName="Goods"></page-search>
    <page-content
      :contentConfig="contentConfig"
      pageName="Goods"
      @editBtnClick="editBtnClick"
    >
      <template #handle>
        <el-button type="primary" @click="addClick">添加商品</el-button>
      </template>
      <template #image="data">
        <el-image
          :src="data.back.imgUrl"
          :preview-src-list="[data.back.imgUrl]"
        >
        </el-image>
      </template>
      <template #status="data">
        <el-button
          size="mini"
          plain
          :type="data.back.status === 1 ? 'danger' : 'success'"
        >
          {{ data.back.status === 1 ? '下架' : '上架' }}
        </el-button>
      </template>
      <template #oldPrice="data">
        <del> ¥ {{ data.back.oldPrice }} </del>
      </template>
      <template #newPrice="data"> ¥ {{ data.back.newPrice }} </template>
    </page-content>
    <page-dialog
      :dialogConfig="dialogConfig"
      pageName="Goods"
      :infoInit="infoInit"
      ref="dialogRef"
    ></page-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageContent from '@/components/page-content'
import pageSearch from '@/components/page-search'
import PageDialog from '@/components/page-dialog/src/page-dialog.vue'

import { formConfig } from './config/search-config'
import { contentConfig } from './config/content-config'
import { dialogConfig } from './config/dialog-config'

import { useDialog } from '@/hook/use-dialog'
export default defineComponent({
  name: 'goods',
  components: {
    pageSearch,
    pageContent,
    PageDialog
  },
  setup() {
    const [dialogRef, infoInit, addClick, editBtnClick] = useDialog()
    return {
      contentConfig,
      formConfig,
      dialogConfig,
      dialogRef,
      infoInit,
      addClick,
      editBtnClick
    }
  }
})
</script>

<style scoped>
.goods {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
