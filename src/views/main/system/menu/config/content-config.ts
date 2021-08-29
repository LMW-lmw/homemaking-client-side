import { ITable } from '@/base-component/table/type'
export const contentConfig: ITable = {
  tableItem: [
    {
      prop: 'name',
      label: '菜单名称',
      minWidth: '100'
    },
    {
      prop: 'type',
      label: '类型',
      minWidth: '100',
      slotName: 'menutype'
    },
    {
      prop: 'url',
      label: '菜单url',
      minWidth: '100'
    },
    {
      prop: 'permission',
      label: '权限按钮',
      minWidth: '100'
    },
    // {
    //   prop: 'permission',
    //   label: '权限按钮',
    //   minWidth: '80'
    // },
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
  childrenProps: {
    rouKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  title: '菜单管理'
}
