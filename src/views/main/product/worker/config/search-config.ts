import { IForm } from '@/base-component/form'
export const formConfig: IForm = {
  labelWidth: '90px',
  itemStyle: { padding: '20px 20px 0px 20px' },
  formItems: [
    {
      field: 'name',
      id: 1,
      type: 'input',
      label: '姓名'
    },
    {
      field: 'telephone',
      id: 2,
      type: 'input',
      label: '电话号码'
    },
    {
      field: 'type',
      id: 3,
      type: 'select',
      label: '家政类型'
    }
  ]
}
