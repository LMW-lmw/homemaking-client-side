<template>
  <div class="side-item">
    <div class="left">
      <i class="iconfont" :class="icon"></i>
      <span>{{ text }}</span>
    </div>
    <span>
      <slot name="icon" />
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    icon: {
      type: String
    },
    text: {
      type: String,
      default: '空'
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.side-item {
  height: 50px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  cursor: pointer;
  padding-right: 35px;
}
.left {
  display: flex;
  align-items: center;
}
.iconfont {
  font-size: 26px;
  padding-left: 30px;
  position: relative;
  top: 1px;
  margin-right: 20px;
}
</style>
