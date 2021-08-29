<template>
  <div class="user-menu">
    <page-content :contentConfig="contentConfig" pageName="Menu">
      <template #menutype="data">
        <template v-if="data.back.type === 1">
          <span>一级菜单</span>
        </template>
        <template v-if="data.back.type === 2">
          <span>二级菜单</span>
        </template>
        <template v-if="data.back.type === 3">
          <span>三级菜单</span>
        </template>
        <template v-if="data.back.type === 4">
          <span>四级菜单</span>
        </template>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import pageContent from '@/components/page-content'

import { contentConfig } from './config/content-config'
export default defineComponent({
  name: 'userMenu',
  components: {
    pageContent
  },
  setup() {
    return { contentConfig }
  }
})
</script>

<style scoped>
.user-menu {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
