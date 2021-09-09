<template>
  <div class="page-content">
    <lmw-table
      :dataList="dataList"
      v-bind="contentConfig"
      :listCount="listCount"
      v-model:paginationInfo="paginationInfo"
    >
      <!-- 操作按钮 -->
      <template v-for="item in contentConfig.handleSlot" #[item]>
        <template v-if="isCreate">
          <template v-if="item">
            <slot :name="item"></slot>
          </template>
        </template>
      </template>

      <template #createTime="data">
        {{ $filters.timeFormat(data.backData.createAt) }}
        <!-- {{ data.backData.createAt }} -->
      </template>
      <template #updateTime="data">
        {{ $filters.timeFormat(data.backData.updateAt) }}
      </template>
      <template #todo="data">
        <div class="todo">
          <div class="edit" v-if="isUpdate">
            <el-button
              type="info"
              size="mini"
              @click="editCLick(data.backData)"
            >
              编辑
            </el-button>
          </div>
          <div class="del" v-if="isDelete">
            <el-button type="danger" size="mini" @click="delBtn(data.backData)"
              >删除
            </el-button>
          </div>
        </div>
      </template>
      <template
        v-for="item in otherSlot"
        :key="item.prop"
        #[item.slotName]="other"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :back="other.backData"></slot>
        </template>
      </template>
    </lmw-table>
    <el-dialog
      title="是否删除"
      v-model="delDialog"
      width="30%"
      destroy-on-close
    >
      <span>
        是否删除名称为
        <strong style="color: #e57470">
          {{ delData.name }}
        </strong>
        的信息
      </span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="delDialog = false">取 消</el-button>
          <el-button type="primary" @click="deleteRow()">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  ref,
  watch,
  onUnmounted
} from 'vue'
import { useStore } from '@/store/index'

import lmwTable from '@/base-component/table'
import { ITable } from '@/base-component/table/type'

import emitter from '@/utils/mitt'
import { usePermission } from '@/hook/use-permission'

export default defineComponent({
  props: {
    contentConfig: {
      type: Object as PropType<ITable>,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    lmwTable
  },
  emits: ['editBtnClick'],
  setup(props, { emit }) {
    const store = useStore()
    const propsPageName = props.pageName.toLowerCase()
    const isCreate = usePermission(propsPageName, 'create')
    const isUpdate = usePermission(propsPageName, 'update')
    const isDelete = usePermission(propsPageName, 'delete')
    const isQuery = usePermission(propsPageName, 'query')
    let delDialog = ref(false)
    let searchData = ''
    let paginationInfo = ref({
      pageCurrent: 0,
      pageSize: 10
    })
    watch(
      paginationInfo,
      () => {
        send()
      },
      {
        deep: true
      }
    )
    const send = (searchInfo?: any) => {
      if (!isQuery) return
      store.dispatch('system/getList', {
        // pageUrl: '/users/list',
        pageName: props.pageName,
        queryInfo: {
          offset:
            paginationInfo.value.pageCurrent * paginationInfo.value.pageSize,
          size: paginationInfo.value.pageSize,
          ...searchInfo
        }
      })
    }
    send()
    emitter.on(`search${props.pageName}Info`, (formData) => {
      searchData = formData
      send(formData)
    })
    onUnmounted(() => {
      emitter.off(`search${props.pageName}Info`, () => {
        console.log(`search${props.pageName}Info`)
      })
    })
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    const listCount = computed(() => {
      return store.getters[`system/listCount`](props.pageName)
    })
    const otherSlot = props.contentConfig?.tableItem?.filter((item) => {
      if (item.slotName === 'createTime') return false
      if (item.slotName === 'updateTime') return false
      // if (item.slotName === 'handle') return false
      if (item.slotName === 'todo') return false
      return true
    })
    let delData = ref<any>({
      name: ''
    })
    const delBtn = (del: any) => {
      delData.value = del
      delDialog.value = true
    }
    const deleteRow = () => {
      delDialog.value = false
      store.dispatch('system/deletDataAction', {
        id: delData.value.id,
        pageName: props.pageName,
        searchData
      })
    }
    const editCLick = (item: any) => {
      emit('editBtnClick', item)
    }
    return {
      dataList,
      listCount,
      paginationInfo,
      otherSlot,
      isCreate,
      isUpdate,
      isDelete,
      deleteRow,
      editCLick,
      delDialog,
      delBtn,
      delData
    }
  }
})
</script>

<style scoped lang="less">
.page-content {
  padding: 20px 20px 20px 20px;
  margin: 15px 15px 40px 15px;
  background-color: #fff;
  border-radius: 5px;
}
.todo {
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    width: 60px;
    text-align: center;
  }
  .edit {
    margin-bottom: 15px;
  }
}
</style>
