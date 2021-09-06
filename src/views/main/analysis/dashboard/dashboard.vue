<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <lmw-card title="分类商品数量(饼图)">
          <div class="item">
            <pie-echart :echartData="categoryCount"></pie-echart>
          </div>
        </lmw-card>
      </el-col>
      <el-col :span="10">
        <lmw-card title="不同城市商品销售量">
          <div class="item">
            <map-echart :mapData="addressSale"></map-echart>
          </div>
        </lmw-card>
      </el-col>
      <el-col :span="7">
        <lmw-card title="分类商品数量(玫瑰图)">
          <div class="item">
            <rose-echart :echartData="categoryCount"></rose-echart>
          </div>
        </lmw-card>
      </el-col>
    </el-row>
    <el-row :gutter="15" class="bottom-row">
      <el-col :span="12">
        <lmw-card title="分类商品销量">
          <div class="item">
            <line-echart v-bind="categorySale" title="销量"></line-echart>
          </div>
        </lmw-card>
      </el-col>
      <el-col :span="12">
        <lmw-card title="分类商品收藏">
          <div class="item">
            <bar-echart v-bind="categoryFavor"></bar-echart>
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
  lineEchart,
  barEchart,
  mapEchart
} from '@/components/use-echarts'

export default defineComponent({
  name: 'dashboard',
  components: {
    lmwCard,
    pieEchart,
    roseEchart,
    lineEchart,
    barEchart,
    mapEchart
  },
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getCategoryData')
    const categoryCount = computed(() => {
      return store.state.dashboard.categoryCount.map((item: any) => {
        return {
          name: item.name,
          value: item.goodsCount
        }
      })
    })
    const categorySale = computed(() => {
      let xlabel: string[] = []
      let values: any[] = []
      const sale = store.state.dashboard.categorySale
      for (const item of sale) {
        xlabel.push(item.name)
        values.push(item.goodsCount)
      }
      return {
        xlabel,
        values
      }
    })
    const categoryFavor = computed(() => {
      let xlabel: string[] = []
      let values: any[] = []
      const favor = store.state.dashboard.categoryFavor
      for (const item of favor) {
        xlabel.push(item.name)
        values.push(item.goodsFavor)
      }
      return {
        xlabel,
        values
      }
    })
    const addressSale = computed(() => {
      return store.state.dashboard.addressSale.map((item: any) => {
        return {
          name: item.address,
          value: item.count
        }
      })
    })
    return { categoryCount, categorySale, categoryFavor, addressSale }
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
