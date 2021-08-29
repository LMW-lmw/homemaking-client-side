<template>
  <div>
    <sidebar :userName="userInfo.name" :menus="menus" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import sidebar from './sidebar.vue'
import storage from '@/utils/storage'
import { useState } from '@/utils/vuexUtil'
export default defineComponent({
  components: { sidebar },
  setup() {
    let menus = storage.getItem('menus', false)
    let userInfo = useState(['userInfo'], 'login')
    return {
      menus,
      ...userInfo
    }
  }
})
</script>

<style scoped></style>
