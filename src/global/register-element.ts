import { App } from 'vue'

import 'element-plus/lib/theme-chalk/base.css'

import { ElIcon, ElCollapseTransition, ElCollapseItem } from 'element-plus'
const components = [ElIcon, ElCollapseTransition, ElCollapseItem]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
