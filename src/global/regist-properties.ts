import { App } from 'vue'

import { timeFormat } from '@/utils/time-format'
export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    timeFormat(value: string) {
      return timeFormat(value)
    }
  }
}
