<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="12">
        <lmw-card title="各行业人数(饼图)">
          <div class="item">
            <pie-echart :echartData="categoryCount"></pie-echart>
          </div>
        </lmw-card>
      </el-col>
      <el-col :span="12">
        <lmw-card title="各行业人数(玫瑰图)">
          <div class="item">
            <rose-echart :echartData="categoryCount"></rose-echart>
          </div>
        </lmw-card>
      </el-col>
    </el-row>
    <el-row :gutter="15" class="bottom-row">
      <el-col :span="24">
        <lmw-card title="优秀员工">
          <div class="item">
            <bar-echart v-bind="categoryTop" title="出勤次数"></bar-echart>
          </div>
        </lmw-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store/index'

import lmwCard from '@/base-component/card'
import {
  pieEchart,
  roseEchart,
  // lineEchart,
  barEchart
  // mapEchart
} from '@/components/use-echarts'

export default defineComponent({
  name: 'dashboard',
  components: {
    lmwCard,
    pieEchart,
    roseEchart,
    // lineEchart,
    barEchart
    // mapEchart
  },
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getCategoryData')
    const categoryCount = computed(() => {
      return store.state.dashboard.categoryCount.map((item: any) => {
        return {
          name: item.name,
          value: item.count
        }
      })
    })
    const categoryTop = computed(() => {
      let xlabel: string[] = []
      let values: any[] = []
      const favor = store.state.dashboard.categoryTop
      for (const item of favor) {
        xlabel.push(item.name)
        values.push(item.count)
      }
      return {
        xlabel,
        values
      }
    })

    return {
      categoryCount,
      categoryTop
    }
  }
})
</script>

<style scoped>
.dashboard {
  padding: 0px 10px 20px 10px;
  margin-bottom: 15px;
}
.bottom-row {
  margin-top: 15px;
}
</style>
