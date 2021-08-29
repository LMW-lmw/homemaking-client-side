<template>
  <div class="topbar">
    <el-breadcrumb separator="/">
      <template v-for="item in breadMenu" :key="item.id">
        <!-- <el-breadcrumb-item></el-breadcrumb-item> -->
        <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { getBreadMenu } from '@/utils/map-menu'

export default defineComponent({
  setup() {
    const store = useStore()
    const breadMenu = computed(() => {
      const route = useRoute()
      const path = route.path
      const menus = store.state.login.menus
      return getBreadMenu(menus, path)
    })
    return {
      breadMenu
    }
  }
})
</script>

<style scoped>
.topbar {
  height: 50px;
  display: flex;
  align-items: center;
}
</style>
