import * as echarts from 'echarts'

import ChinaMapData from '../data/china.json'
echarts.registerMap('china', ChinaMapData)
export default function (el: HTMLElement) {
  const eachartInstance = echarts.init(el)
  const setOption = (option: echarts.EChartsOption) => {
    eachartInstance.setOption(option)
  }
  window.addEventListener('resize', () => {
    eachartInstance.resize()
  })
  const updateResize = () => {
    eachartInstance.resize()
  }
  return {
    eachartInstance,
    setOption,
    updateResize
  }
}
