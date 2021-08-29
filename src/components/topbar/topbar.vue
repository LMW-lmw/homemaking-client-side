<template>
  <div class="head">
    <breadcrumb />
    <el-dropdown style="display: flex">
      <span class="users">
        <img src="../../assets/img/dog.jpeg" />
        <span class="el-dropdown-link">{{ username }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <!-- <el-dropdown>
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown> -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import breadcrumb from '../breadcrumb/breadcrumb.vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
import storage from '@/utils/storage'
export default defineComponent({
  setup() {
    const store = useStore()
    const username = store.state.login.userInfo.name
    const router = useRouter()
    const loginOut = () => {
      if (storage.getItem('token')) {
        storage.removeItem('token')
      }
      if (storage.getItem('token', false)) {
        storage.removeItem('token', false)
      }
      router.push('/login')
    }
    return { username, loginOut }
  },
  components: {
    breadcrumb
  }
})
</script>

<style scoped lang="less">
.head {
  border-radius: 30px 0px 0px 0px;
  padding: 0px 80px 0px 50px;
  width: calc(100% - 320px);
  background-color: #fff;
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  // -moz-box-shadow: 0px 1px 3px #333333;
  // -webkit-box-shadow: 0px 1px 3px #333333;
  // box-shadow: 0px 1px 3px #333333;
  .dropdown {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
.users {
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-right: 10px;
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
