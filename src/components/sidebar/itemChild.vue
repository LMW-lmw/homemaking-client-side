<template>
  <div class="child">
    <i class="el-icon-right right"></i>
    <span> child </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.child {
  width: 210px;
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  margin-bottom: 16px;
}
.child:hover {
  color: #4f6a9d;
}
.right {
  margin-left: 13px;
  margin-right: 16px;
  font-size: 14px;
}
</style>
