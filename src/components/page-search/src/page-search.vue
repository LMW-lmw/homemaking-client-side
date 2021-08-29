<template>
  <div class="page-search">
    <div class="search">
      <lmw-form v-bind="formConfig" v-model:data="formData">
        <template #header>
          <div class="header">
            <span>搜索</span>
          </div>
        </template>
        <template #footer>
          <div class="footer">
            <el-button icon="el-icon-refresh" @click="reset">重置</el-button>
            <el-button type="primary" icon="el-icon-search" @click="search">
              检索
            </el-button>
          </div>
        </template>
      </lmw-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import lmwForm from '@/base-component/form/index'
import emitter from '@/utils/mitt'
export default defineComponent({
  components: {
    lmwForm
  },
  props: {
    formConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const formItem = props.formConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItem) {
      formOriginData[item.field] = ''
    }
    let formData = ref(formOriginData)
    const search = () => {
      emitter.emit(`search${props.pageName}Info`, formData.value)
    }
    const reset = () => {
      // for (const key in formOriginData) {
      //   formData.value[key] = formOriginData[key]
      // }
      formData.value = formOriginData
      search()
    }
    return { formData, reset, search }
  }
})
</script>

<style scoped lang="less">
.search {
  background-color: #ffff;
  margin: 0px 15px;
  border-radius: 5px;
}
.header {
  height: 50px;
  line-height: 60px;
  text-align: center;
}
.footer {
  text-align: right;
  padding: 0px 20px 30px 0px;
  button {
    width: 90px;
  }
}
</style>
