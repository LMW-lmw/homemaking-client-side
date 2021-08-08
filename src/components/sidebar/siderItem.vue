<template>
  <div class="side-item" :class="{ active: isActive }" :ref="sideRef">
    <i class="iconfont color icon-xitong1" :class="icon"></i>
    <span class="text">{{ text }}</span>
    <i class="el-icon-arrow-down down" :class="{ rotate: isActive }"></i>
  </div>
</template>

<script>
import { defineComponent, onBeforeUpdate } from 'vue'
export default defineComponent({
  name: '',
  props: {
    icon: { type: String, default: '' },
    text: { type: String, default: 'admin' },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    let side = []
    const sideRef = (event) => {
      side.push(event)
    }
    onBeforeUpdate(() => {
      side = []
    })
    return {
      sideRef
    }
  }
})
</script>

<style scoped lang="less">
.side {
  overflow: hidden;
}
.side-item {
  display: flex;
  align-items: center;
  height: 45px;
  padding-right: 10px;
  border-radius: 10px;
  margin-bottom: 16px;
  // background-color: #eff6ff;
  cursor: pointer;
}
.color {
  // color: #4c74ec;
  font-size: 28px;
  margin: 0px 5px;
}
.text {
  margin-bottom: 2px;
  margin-left: 5px;
}
.active {
  color: #4c74ec !important;
  background-color: #eff6ff !important;
}
.down {
  margin-left: auto;
  transition: all 0.5s;
}
.rotate {
  transform: rotate(180deg);
}
.items {
  cursor: pointer;
  margin-bottom: 5px;
}
</style>
