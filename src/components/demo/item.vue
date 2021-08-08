<template>
  <div class="item">
    <div v-for="(mainMenu, index) in menus" :key="mainMenu.id">
      <h2 class="item" @click="changeShow(index)">
        {{ mainMenu.name }}
      </h2>
      <div
        class="children"
        v-if="mainMenu.children"
        style="height: 0"
        :ref="bindHeigh"
      >
        <div class="height" :ref="bindRef">
          <div v-for="child in mainMenu.children" class="child" :key="child.id">
            {{ child.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import child from './child.vue'
import { ref, onBeforeUpdate } from 'vue'
export default {
  name: '',
  props: {
    menus: {
      type: Array
    }
  },
  components: {
    // child
  },
  setup() {
    let isShow = ref(false)
    let list = []
    let height = []
    const changeShow = (index) => {
      console.log(height[index].style.height)
      console.log(list[index].offsetHeight)
      if (height[index].style.height === '0px') {
        height[index].style.height = list[index].offsetHeight + 'px'
      } else {
        height[index].style.height = '0px'
      }
    }
    const bindRef = (event) => {
      list.push(event)
    }
    const bindHeigh = (event) => {
      height.push(event)
    }
    onBeforeUpdate(() => {
      list = []
      height = []
    })
    // console.log(props.menus)
    return {
      isShow,
      changeShow,
      bindRef,
      bindHeigh
    }
  }
}
</script>

<style scoped lang="less">
.item {
  cursor: pointer;
}
.children {
  overflow: hidden;
  cursor: pointer;
  transition: all 500ms;
}
</style>
