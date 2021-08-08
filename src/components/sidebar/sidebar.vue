<template>
  <div class="sidebar">
    <div class="title">
      <h3>{{ userInfo.name }}</h3>
      <i class="el-icon-bell icon"></i>
    </div>
    <div class="items" v-for="(menu, index) in menus" :key="menu.id">
      <div class="main-side" @click="changeShow(index)" :ref="mainSide">
        <sider-item :icon="menu.icon" :text="menu.name">
          <template #icon>
            <i class="el-icon-arrow-down down-or-up" :ref="iconRef"></i>
          </template>
        </sider-item>
      </div>
      <div class="child" :ref="bindChild" style="height: 0px">
        <div class="bind-heigh" :ref="bindHeith">
          <div v-for="(child, childIndex) in menu.children" :key="child.id">
            <child
              :text="child.name"
              :childActive="path === child.url"
              @click="changeChild(childIndex, child.url)"
            ></child>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUpdate, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import siderItem from './siderItem.vue'
import storage from '@/utils/storage'
import { useState } from '@/utils/vuexUtil'
import child from './itemChild.vue'
export default defineComponent({
  name: 'siderbar',
  components: {
    siderItem,
    child
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    let menus = storage.getItem('menus', false)
    let userInfo = useState(['userInfo'], 'login')
    let childHeigh: any = []
    let child: any = []
    let side: any = []
    let icon: any = []
    const bindHeith = (event: any) => {
      childHeigh.push(event)
    }
    const bindChild = (event: any) => {
      child.push(event)
    }
    const mainSide = (event: any) => {
      side.push(event)
    }
    const iconRef = (event: any) => {
      icon.push(event)
    }
    const changeShow = (index: number) => {
      if (child[index].style.height === '0px') {
        child[index].style.height = childHeigh[index].offsetHeight + 'px'
        side[index].className += ' active'
        icon[index].className += ' iconActive'
      } else {
        child[index].style.height = '0px'
        side[index].className = 'main-side'
        icon[index].className += 'el-icon-arrow-down down-or-up'
      }
    }
    // 获取当前路由路径  这里用于判断child的活跃状态以便添加class
    const path = computed(() => route.path)
    const changeChild = (index: number, url: string) => {
      router.push(url)
    }
    onBeforeUpdate(() => {
      childHeigh = []
      child = []
      side = []
      icon = []
    })
    return {
      menus,
      bindHeith,
      bindChild,
      changeShow,
      mainSide,
      iconRef,
      changeChild,
      ...userInfo,
      path
    }
  }
})
</script>

<style scoped lang="less">
.sidebar {
  width: 380px;
  height: 100%;
  background: #141922;
  color: #dce2ec;
  overflow: scroll;
  padding-right: 20px;
  z-index: 1;
}
.title {
  height: 50px;
  display: flex;
  align-items: center;
  margin: 20px 0px 80px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 40px;
  .icon {
    position: relative;
    top: 3px;
    font-size: 16px;
  }
}
.child {
  overflow: hidden;
  transition: height 500ms;
}
.main-side {
  border-left: 5px solid #151921;
}
.active {
  border-color: #4679cb;
  background-image: linear-gradient(
    to right,
    rgba(19, 31, 53, 0.8),
    rgba(19, 25, 34, 0.8)
  );
}
.down-or-up {
  transition: all 500ms;
}
.iconActive {
  transform: rotate(180deg);
}
</style>
