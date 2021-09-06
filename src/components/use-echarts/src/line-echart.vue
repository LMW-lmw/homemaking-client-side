<template>
  <div class="line-echart">
    <lmw-echart :options="option"></lmw-echart>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import lmwEchart from '@/base-component/echart'
export default defineComponent({
  components: {
    lmwEchart
  },
  props: {
    xlabel: {
      type: Array,
      required: true
    },
    values: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: '标题'
    }
  },
  setup(props) {
    const option = computed(() => {
      return {
        title: {
          text: props.title
        },
        legend: {
          data: ['分类销量']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: props.xlabel
        },
        yAxis: [{ type: 'value' }],
        series: [
          {
            name: '分类销量',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: props.values
          }
        ]
      }
    })

    return { option }
  }
})
</script>

<style scoped></style>
