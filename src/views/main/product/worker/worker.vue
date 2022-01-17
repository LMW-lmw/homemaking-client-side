<template>
  <div class="worker">
    <page-search
      :formConfig="searchConfigComputed"
      pageName="Worker"
    ></page-search>
    <page-content
      :contentConfig="contentConfig"
      pageName="Worker"
      @editBtnClick="editBtnClick"
      ref="pageContentRef"
    >
      <template #handle>
        <el-button type="primary" @click="addClick">添加人员</el-button>
      </template>
      <template #price="data"> ¥ {{ data.back.remuneration }} </template>
    </page-content>
    <page-dialog
      :dialogConfig="workerDialogConfig"
      pageName="Worker"
      :infoInit="infoInit"
      ref="dialogRef"
      :otherInfo="otherInfos"
      :searchData="searchData"
    >
      <div>
        <label style="margin: 0px 12px 0px 40px">地区</label>
        <el-cascader
          style="width: 77%"
          size="large"
          :options="regionDataPlus"
          @change="handleChange"
          v-model="selectedOptions"
        >
        </el-cascader>
      </div>
    </page-dialog>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import { useStore } from '@/store'

import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import PageDialog from '@/components/page-dialog/src/page-dialog.vue'

import { formConfig } from './config/search-config'
import { contentConfig } from './config/content-config'
import { dialogConfig } from './config/dialog-config'

import { useDialog } from '@/hook/use-dialog'
import emitter from '@/utils/mitt'

// 中国区域
import { regionDataPlus } from 'element-china-area-data'
export default defineComponent({
  name: 'worker',
  components: {
    pageSearch,
    pageContent,
    PageDialog
  },
  setup() {
    const store = useStore()

    const workerDialogConfig: any = computed(() => {
      const typeItem = dialogConfig.formItems.find(
        (item) => item.field === 'type'
      )
      if (typeItem) {
        typeItem.options = store.state.category.map((item) => {
          return { title: item.name, value: item.name }
        })
      }
      return dialogConfig
    })
    let otherInfos = ref<any>({
      province: '',
      city: '',
      area: ''
    })
    const selectedOptions: any = ref([])
    const handleChange = (val: any) => {
      otherInfos.value.province = val[0]
      otherInfos.value.city = val[1]
      otherInfos.value.area = val[2]
    }
    const edit = (info: any) => {
      let arr = [`${info.provinceid}`, `${info.cityid}`, `${info.areaid}`]
      selectedOptions.value = arr
      otherInfos.value.province = arr[0]
      otherInfos.value.city = arr[1]
      otherInfos.value.area = arr[2]
    }
    const add = () => {
      selectedOptions.value = []
    }
    const [dialogRef, infoInit, addClick, editBtnClick] = useDialog(add, edit)
    const searchConfigComputed = computed(() => {
      const typeItem = formConfig.formItems.find(
        (item) => item.field === 'type'
      )
      if (typeItem) {
        typeItem.options = store.state.category.map((item) => {
          return { title: item.name, value: item.name }
        })
      }
      return formConfig
    })
    // 搜索框和分页信息
    let searchData: any = ref({})
    let pageContentRef = ref<InstanceType<typeof pageContent>>()
    emitter.on(`searchWorkerInfo`, (formData) => {
      // console.log('user: ', formData)
      searchData.value = formData
      console.log('workers: ', searchData.value)
    })
    watch(
      () => pageContentRef.value?.paginationInfo,
      (newValue: any) => {
        if (newValue) {
          searchData.value.offset = newValue.pageCurrent * newValue.pageSize
          searchData.value.size = newValue.pageSize
        }
      },
      {
        deep: true
      }
    )
    return {
      contentConfig,
      searchConfigComputed,
      workerDialogConfig,
      dialogRef,
      infoInit,
      addClick,
      editBtnClick,
      regionDataPlus,
      handleChange,
      selectedOptions,
      otherInfos,
      pageContentRef,
      searchData
    }
  }
})
</script>

<style scoped>
.worker {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
