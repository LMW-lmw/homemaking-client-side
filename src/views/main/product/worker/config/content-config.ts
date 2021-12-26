export const contentConfig = {
  tableItem: [
    {
      prop: 'name',
      label: '姓名',
      minWidth: '100'
    },
    {
      prop: 'province',
      label: '省份/直辖市',
      minWidth: '100'
    },
    {
      prop: 'city',
      label: '地级市',
      minWidth: '100'
    },
    {
      prop: 'area',
      label: '区',
      minWidth: '100'
    },
    {
      prop: 'type',
      label: '行业',
      minWidth: '100',
      slotName: 'type'
    },
    {
      prop: 'remuneration',
      label: '日薪',
      minWidth: '100',
      slotName: 'price'
    },
    {
      prop: 'count',
      label: '出勤次数',
      minWidth: '100'
    },
    {
      prop: 'telephone',
      label: '电话号码',
      minWidth: '150'
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
  title: '行业人员',
  handleSlot: ['handle']
}
