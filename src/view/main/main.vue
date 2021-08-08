<template>
  <div class="main">
    <sidebar />
    <!-- <demo /> -->
    <!-- <router-view /> -->
    <div class="router">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import sidebar from '@/components/sidebar/sidebar.vue'
// import demo from '@/components/demo/demo.vue'
export default defineComponent({
  components: {
    sidebar
    // demo
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.main {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #ebeaee;
  display: flex;
  // padding: px 0px 0px 0px;
}
.router {
  position: relative;
  right: 20px;
  bottom: 2px;
  border-radius: 30px 0px 0px 0px;
  padding: 30px 0px 0px 50px;
  background-color: #ebeaee;
  width: calc(100% + 20px);
  height: calc(100% + 2px);
  z-index: 2;
}
</style>
