<template>
  <div class="sidebar">
    <div class="title">
      <h3>{{ userName }}</h3>
      <i class="el-icon-bell icon"></i>
    </div>
    <div class="items" v-for="(menu, index) in menus" :key="menu.id">
      <div
        class="main-side"
        @click="changeShow(index)"
        :ref="mainSide"
        :data-url="menu.url"
      >
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
import { defineComponent, onBeforeUpdate, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import siderItem from './siderItem.vue'
import { hideSide, showSide, showOneSide } from './util/sider'
import child from './itemChild.vue'
export default defineComponent({
  name: 'siderbar',
  components: {
    siderItem,
    child
  },
  props: { menus: { type: Array }, userName: { type: String } },
  setup() {
    const router = useRouter()
    const route = useRoute()
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
        showSide(child, childHeigh, side, icon, index)
      } else {
        hideSide(child, side, icon, index)
      }
    }
    // 获取当前路由路径  这里用于判断child的活跃状态以便添加class
    const path = computed(() => route.path)
    const changeChild = (index: number, url: string) => {
      router.push(url)
    }
    onMounted(() => {
      side.forEach((item: any, index: number) => {
        if (route.path.indexOf(item.dataset.url) != -1) {
          showOneSide(child, childHeigh, item, icon, index)
        }
      })
    })
    onBeforeUpdate(() => {
      childHeigh = []
      child = []
      side = []
      icon = []
    })
    return {
      bindHeith,
      bindChild,
      changeShow,
      mainSide,
      iconRef,
      changeChild,
      path
    }
  }
})
</script>

<style scoped lang="less">
.sidebar {
  width: 230px;
  height: 100%;
  background: #141922;
  color: #dce2ec;
  overflow: scroll;
  padding-right: 20px;
  z-index: 1;
}
.sidebar::-webkit-scrollbar {
  display: none;
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
