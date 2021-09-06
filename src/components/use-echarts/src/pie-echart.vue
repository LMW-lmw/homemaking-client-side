<template>
  <div class="pie-echart">
    <lmw-echart :options="option"></lmw-echart>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import lmwEchart from '@/base-component/echart'
import { IEchartData } from '../type'
export default defineComponent({
  components: {
    lmwEchart
  },
  props: {
    echartData: {
      type: Array as PropType<IEchartData[]>,
      required: true
    }
  },
  setup(props) {
    const option = computed(() => {
      return {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          left: 'left'
        },
        series: [
          {
            name: '分类数据',
            type: 'pie',
            radius: '50%',
            data: props.echartData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    })
    return { option }
  }
})
</script>

<style scoped></style>
