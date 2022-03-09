<template>
  <div class="lmw-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handle">
          <slot name="handle"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="dataList"
      border
      style="width: 100%"
      :row-key="childrenProps.rouKey"
      :tree-props="childrenProps.treeProp"
      @selection-change="selectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
        align="center"
        v-if="showChoose"
      ></el-table-column>
      <el-table-column
        width="75"
        align="center"
        label="序号"
        type="index"
        v-if="showIndex"
      ></el-table-column>
      <template v-for="item in tableItem" :key="item.prop">
        <el-table-column v-bind="item" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="item.slotName" :backData="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="pagination">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="paginationInfo.currentPage"
          :page-sizes="[5, 10, 20, 30]"
          :page-size="paginationInfo.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      // 表格标题
      type: String,
      required: true
    },
    dataList: {
      // 数据
      type: Array,
      required: true
    },
    tableItem: {
      // 每列的名字
      type: Array,
      required: true
    },
    showChoose: {
      // 是否展示复选框
      type: Boolean,
      default: false
    },
    showIndex: {
      // 是否展示序号
      type: Boolean,
      default: false
    },
    pagination: {
      // 是否显示分页
      type: Boolean,
      default: true
    },
    listCount: {
      //总条数
      type: Number,
      default: 0
    },
    paginationInfo: {
      // 分页的页码和偏移
      type: Object,
      default: () => ({ currentPage: 0, pageSize: 5 })
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['selectionChange', 'update:paginationInfo'],
  setup(props, { emit }) {
    const selectionChange = (value: any) => {
      emit('selectionChange', value)
    }
    const handleCurrentChange = (pageCurrent: number) => {
      pageCurrent = pageCurrent - 1
      setTimeout(() => {
        // 让CurrentChange比sizeChange后执行
        console.log('time')
        emit('update:paginationInfo', { ...props.paginationInfo, pageCurrent })
      }, 0)
    }
    const handleSizeChange = (pageSize: number) => {
      console.log('no time')
      emit('update:paginationInfo', { ...props.paginationInfo, pageSize })
    }
    return { selectionChange, handleCurrentChange, handleSizeChange }
  }
})
</script>

<style scoped>
.header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  line-height: 40px;
}
.footer {
  margin-top: 20px;
  float: right;
}
</style>
