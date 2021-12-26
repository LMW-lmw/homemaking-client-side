<template>
  <div>
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
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: '人数',
            type: 'pie',
            radius: [50, 100],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: props.echartData
          }
        ]
      }
    })

    return { option }
  }
})
</script>

<style scoped></style>
