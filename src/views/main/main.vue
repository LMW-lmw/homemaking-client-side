<template>
  <div class="main">
    <!-- <el-container>
      <sidebar />
      <el-container class="router">
        <el-header class="head">Header</el-header>
        <el-main>
          <div>
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container> -->
    <sidebar />
    <div class="router">
      <topbar />
      <div style="margin-top: 65px"><router-view /></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import sidebar from '@/components/sidebar/sideuse.vue'
import topbar from '@/components/topbar/topbar.vue'
export default defineComponent({
  components: {
    sidebar,
    topbar
  },
  setup() {
    return {}
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
