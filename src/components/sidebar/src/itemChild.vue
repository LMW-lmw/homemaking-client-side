<template>
  <div class="child" :class="{ childActive: childActive }">
    <i class="el-icon-right right"></i>
    <span>{{ text }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: String,
      default: 'null'
    },
    childActive: {
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
.child {
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 28px;
}
.child:hover {
  color: #4679cb;
}
.childActive {
  color: #4679cb;
}
.right {
  margin-left: 13px;
  margin-right: 28px;
  font-size: 14px;
}
</style>
