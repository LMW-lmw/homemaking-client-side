<template>
  <div class="overview">
    <page-search :formConfig="formConfig" pageName="Overview"></page-search>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { formConfig } from './config'
import pageSearch from '@/components/page-search'
export default defineComponent({
  name: 'overview',
  components: { pageSearch },
  setup() {
    return { formConfig }
  }
})
</script>

<style scoped lang="less">
.overview {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
</style>
