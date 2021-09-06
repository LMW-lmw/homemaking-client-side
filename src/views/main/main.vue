<template>
  <div class="main">
    <sidebar :userName="userInfo.name" :menus="menus" />
    <div class="router">
      <topbar />
      <div style="margin-top: 65px"><router-view /></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import sidebar from '@/components/sidebar'
import topbar from '@/components/topbar/topbar.vue'

import storage from '@/utils/storage'
import { useState } from '@/utils/vuexUtil'

export default defineComponent({
  components: {
    sidebar,
    topbar
  },
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

<style scoped lang="less">
.main {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #e4e4e9;
  display: flex;
}
.router {
  position: absolute;
  left: 230px;
  bottom: -20px;
  display: flex;
  flex-direction: column;
  border-radius: 30px 0px 0px 0px;
  // padding: 0px 0px 0px 10px;
  background-color: #e4e4e9;
  width: calc(100% - 230px);
  height: calc(100% + 22px);
  z-index: 2;
  overflow: scroll;
}
</style>
