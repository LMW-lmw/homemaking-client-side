<template>
  <div class="sidebar">
    <div class="title">
      <img src="../../assets/img/mainlogo.png" />
      <div class="name">
        <span class="user">{{ userInfo.name }}</span>
        <div class="day">{{ nowDay }}</div>
      </div>
    </div>
    <div>
      <sider-item></sider-item>
      <child />
      <child />
    </div>
    <div>
      <sider-item></sider-item>
      <child />
    </div>
    <div>
      <sider-item></sider-item>
      <child />
    </div>
    <!-- <div v-for="(menu, index) in menus" :key="menu.id" style="overflow: hidden">
      <siderItem
        :icon="menu.icon"
        :text="menu.name"
        @click="itemClick(index, $event)"
        :isActive="index === nowItem"
      >
      </siderItem>
      <div class="items" v-if="menu.children">
        <template v-for="children in menu.children" :key="children.id">
          <div class="children">
            <i class="el-icon-right right"></i>
            <span>{{ children.name }}</span>
          </div>
        </template>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import siderItem from './siderItem.vue'
import storage from '@/utils/storage'
import { useState } from '@/utils/vuexUtil'
import child from './itemChild.vue'
// import { slide } from '@/hook/sider'
export default defineComponent({
  name: 'siderbar',
  components: {
    siderItem,
    child
  },
  setup() {
    let now: any = new Date()
    let week = now.getDay()
    let nowDay = ref('')
    let nowItem = ref(0)
    let sider = []
    switch (week) {
      case 1:
        nowDay.value = 'Monday'
        break
      case 2:
        nowDay.value = 'Tuesday'
        break
      case 3:
        nowDay.value = 'Wednesday'
        break
      case 4:
        nowDay.value = 'Thursday'
        break
      case 5:
        nowDay.value = 'Friday'
        break
      case 6:
        nowDay.value = 'Saturday'
        break
      case 7:
        nowDay.value = 'Sunday'
        break
    }
    let menus = storage.getItem('menus', false)
    const siderRef = (event: any) => {
      sider.push(event)
    }
    let itemClick = (index: any) => {
      nowItem.value = index
      // slide(event)
    }
    let userInfo = useState(['userInfo'], 'login')
    return {
      nowDay,
      menus,
      itemClick,
      nowItem,
      siderRef,
      ...userInfo
    }
  }
})
</script>

<style scoped lang="less">
.sidebar {
  width: 210px;
  height: 100%;
  border-radius: 30px 30px 0px 0px;
  background: #ffffff;
  box-shadow: 5px 5px 44px #d9d9d9, -5px -5px 44px #ffffff;
  padding: 25px 20px 25px 20px;
}
.title {
  margin-top: 20px;
  margin-bottom: 40px;
  height: 55px;
  display: flex;
  align-items: center;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  padding-left: 5px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 15px;
  }
  .name {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    .user {
      font-size: 14px;
      margin-bottom: 3px;
    }
    .day {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 20px;
      font-size: 14px;
      color: white;
      border-radius: 5px;
      padding: 0px 3px 0px 3px;
      background-color: #65d7cc;
    }
  }
}
.children {
  height: 25px;
  display: flex;
  align-items: center;
  transition: all;
}
.right {
  margin-left: 13px;
  margin-right: 12px;
  font-size: 14px;
}
</style>
