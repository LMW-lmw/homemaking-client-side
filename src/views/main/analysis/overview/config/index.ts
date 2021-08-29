import { IForm } from '@/base-component/form'
export const formConfig: IForm = {
  labelWidth: '90px',
  itemStyle: { padding: '20px 20px 0px 20px' },
  formItems: [
    {
      field: 'name',
      id: 1,
      type: 'input',
      label: '用户名'
    },
    {
      field: 'nickname',
      id: 2,
      type: 'input',
      label: 'nickName'
    },
    {
      field: 'age',
      id: 3,
      type: 'input',
      label: 'age'
    },
    {
      field: 'favorite',
      id: 4,
      type: 'select',
      label: '喜好',
      placeholder: '请选择',
      options: [
        { title: '足球', value: 'football' },
        { title: '篮球', value: 'basketball' }
      ]
    },
    {
      field: 'date',
      id: 5,
      type: 'datepicker',
      label: '日期',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
