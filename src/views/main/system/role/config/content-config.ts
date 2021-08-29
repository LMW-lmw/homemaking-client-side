import { ITable } from '@/base-component/table/type'
export const contentConfig: ITable = {
  tableItem: [
    {
      prop: 'name',
      label: '角色名',
      minWidth: '100'
    },
    {
      prop: 'intro',
      label: '权限',
      minWidth: '100'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateTime'
    },
    {
      label: '操作',
      minWidth: '110',
      slotName: 'todo'
    }
  ],
  showIndex: true,
  showChoose: true,
  handleSlot: ['handle'],
  title: '用户管理'
}
