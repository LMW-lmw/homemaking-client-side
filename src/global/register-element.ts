import { App } from 'vue'

import 'element-plus/lib/theme-chalk/base.css'

import { ElButton } from 'element-plus'
const components = [ElButton]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
