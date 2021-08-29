export const contentConfig = {
  tableItem: [
    {
      prop: 'name',
      label: '名称',
      minWidth: '100'
    },
    {
      prop: 'oldPrice',
      label: '原价',
      minWidth: '100',
      slotName: 'oldPrice'
    },
    {
      prop: 'newPrice',
      label: '现价格',
      minWidth: '100',
      slotName: 'newPrice'
    },
    {
      prop: 'address',
      label: '地址',
      minWidth: '100'
    },
    {
      prop: 'status',
      label: '状态',
      minWidth: '100',
      slotName: 'status'
    },
    {
      prop: 'imgUrl',
      label: '图片',
      minWidth: '80',
      slotName: 'image'
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
  showChoose: true,
  showIndex: true,
  pagination: true,
  title: '商品管理',
  handleSlot: ['handle']
}
