import { App } from 'vue'

import 'element-plus/lib/theme-chalk/base.css'

import {
  ElIcon,
  ElCollapseTransition,
  ElCollapseItem,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElForm,
  ElInput,
  ElFormItem,
  ElCol,
  ElRow,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElButton,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElTree,
  ElCard,
  ElDescriptions,
  ElDescriptionsItem,
  ElTag,
  ElLink
} from 'element-plus'
const components = [
  ElIcon,
  ElCollapseTransition,
  ElCollapseItem,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElForm,
  ElInput,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElFormItem,
  ElCol,
  ElRow,
  ElButton,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElTree,
  ElCard,
  ElDescriptions,
  ElDescriptionsItem,
  ElTag,
  ElLink
]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
