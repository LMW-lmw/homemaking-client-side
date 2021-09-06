<template>
  <div class="base-echart">
    <div ref="echartRef" :style="{ height: height, width: width }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, PropType, watchEffect } from 'vue'
import { EChartsOption } from 'echarts'
import useEchart from '../hooks/useEchart'
export default defineComponent({
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    options: {
      type: Object as PropType<EChartsOption>,
      required: true
    }
  },
  setup(props) {
    const echartRef = ref<HTMLElement>()

    onMounted(() => {
      if (echartRef.value) {
        const { setOption } = useEchart(echartRef.value)
        watchEffect(() => {
          setOption(props.options)
        })
      }
    })
    return {
      echartRef
    }
  }
})
</script>

<style scoped></style>
