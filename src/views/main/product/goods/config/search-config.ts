import { IForm } from '@/base-component/form'
export const formConfig: IForm = {
  labelWidth: '90px',
  itemStyle: { padding: '20px 20px 0px 20px' },
  formItems: [
    {
      field: 'name',
      id: 1,
      type: 'input',
      label: '商品名称'
    },
    {
      field: 'address',
      id: 2,
      type: 'input',
      label: '地址'
    },
    {
      field: 'status',
      id: 4,
      type: 'select',
      label: '商品状态',
      placeholder: '请选择商品状态',
      options: [
        { title: '全部', value: '' },
        { title: '未上架', value: 0 },
        { title: '已上架', value: 1 }
      ]
    }
  ]
}
