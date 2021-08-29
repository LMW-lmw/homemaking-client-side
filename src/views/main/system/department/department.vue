<template>
  <div class="department">
    <page-search :formConfig="formConfig" pageName="Department"></page-search>
    <page-content :contentConfig="contentConfig" pageName="Department">
      <template #handle>
        <el-button type="primary">添加部门</el-button>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'

import { contentConfig } from './config/content-config'
import { formConfig } from './config/search-config'
export default defineComponent({
  name: 'department',
  components: {
    pageSearch,
    pageContent
  },
  setup() {
    return { contentConfig, formConfig }
  }
})
</script>

<style scoped></style>
