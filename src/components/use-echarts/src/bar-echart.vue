<template>
  <div class="bar-echart">
    <lmw-echart :options="option"></lmw-echart>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import lmwEchart from '@/base-component/echart'
import * as echarts from 'echarts'
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
      default: '柱状图'
    }
  },
  setup(props) {
    const option = computed(() => {
      return {
        title: {
          text: props.title
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          data: props.xlabel,
          axisLabel: {
            inside: true,
            color: '#fff'
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#999'
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: [
          {
            type: 'bar',
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#83bff6' },
                { offset: 0.5, color: '#188df0' },
                { offset: 1, color: '#188df0' }
              ])
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#2378f7' },
                  { offset: 0.7, color: '#2378f7' },
                  { offset: 1, color: '#83bff6' }
                ])
              }
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
