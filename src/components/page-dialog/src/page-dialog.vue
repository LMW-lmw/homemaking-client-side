<template>
  <div class="page-dialog">
    <el-dialog
      :title="title"
      v-model="dialogVisible"
      width="30%"
      center
      destroy-on-close
    >
      <lmw-form
        v-model:data="formData"
        v-bind="dialogConfig"
        ref="form"
      ></lmw-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="commitClick"> 确 定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useStore } from 'vuex'
import lmwForm from '@/base-component/form'
export default defineComponent({
  components: {
    lmwForm
  },
  props: {
    dialogConfig: {
      type: Object,
      required: true
    },
    infoInit: {
      type: Object,
      default: () => ({})
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    },
    searchData: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    let dialogVisible = ref(false)
    let formData = ref<any>({})
    let title = ref('')
    let form = ref<InstanceType<typeof lmwForm>>()
    const store = useStore()
    watch(
      () => props.infoInit,
      (newValue) => {
        for (const item of props.dialogConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )
    const commitClick = () => {
      const success = () => {
        dialogVisible.value = false
        if (Object.keys(props.infoInit).length) {
          //编辑
          // console.log('编辑：', { ...formData.value, ...props.otherInfo })
          // console.log(props.infoInit.id)
          console.log('page-dialog:', props.otherInfo)
          console.log({ ...formData.value })
          store.dispatch('system/editDataAction', {
            pageName: props.pageName,
            editInfo: { ...formData.value, ...props.otherInfo },
            searchData: { ...props.searchData },
            id: props.infoInit.id
          })
        } else {
          //新建
          store.dispatch('system/createDataAction', {
            pageName: props.pageName,
            newData: { ...formData.value, ...props.otherInfo },
            searchData: { ...props.searchData }
          })
          // console.log({ ...formData.value, ...props.otherInfo })
        }
      }
      form.value?.commit(success)
    }
    return { dialogVisible, formData, title, commitClick, form }
  }
})
</script>

<style scoped></style>
