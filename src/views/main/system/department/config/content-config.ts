import { ITable } from '@/base-component/table/type'
export const contentConfig: ITable = {
  tableItem: [
    {
      prop: 'name',
      label: '部门名称',
      minWidth: '100'
    },
    {
      prop: 'leader',
      label: '负责人',
      minWidth: '100'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '150',
      slotName: 'createTime'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '150',
      slotName: 'updateTime'
    },
    {
      label: '操作',
      minWidth: '80',
      slotName: 'todo'
    }
  ],
  pagination: false,
  handleSlot: ['handle'],
  title: '部门管理'
}
