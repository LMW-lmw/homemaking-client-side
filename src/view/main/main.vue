<template>
  <div class="main">
    <sidebar />
    <!-- <demo /> -->
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
  overflow: hidden;
  background-color: #f1f2f6;
  padding: 8px 0px 0px 8px;
}
</style>
