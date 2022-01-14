import { ITable } from '@/base-component/table/type'
export const contentConfig: ITable = {
  tableItem: [
    {
      prop: 'name',
      label: '用户名',
      minWidth: '80'
    },
    {
      prop: 'realname',
      label: '真实姓名',
      minWidth: '80'
    },
    {
      prop: 'cellphone',
      label: '电话',
      minWidth: '100'
    },
    {
      prop: 'enable',
      label: '状态',
      minWidth: '80',
      slotName: 'status'
    },
    {
      prop: 'department',
      label: '部门',
      minWidth: '80'
      // slotName: 'department'
    },
    {
      prop: 'role',
      label: '角色',
      minWidth: '100'
      // slotName: 'role'
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
  // showChoose: true,
  showIndex: true,
  pagination: true,
  handleSlot: ['handle'],
  title: '用户管理'
}
