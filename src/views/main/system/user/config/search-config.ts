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
      field: 'realname',
      id: 2,
      type: 'input',
      label: '真实姓名'
    },
    {
      field: 'cellphone',
      id: 3,
      type: 'input',
      label: '电话号码'
    },
    {
      field: 'enable',
      id: 4,
      type: 'select',
      label: '用户状态',
      placeholder: '请选择用户状态',
      options: [
        { title: '全部', value: '' },
        { title: '禁用', value: 0 },
        { title: '启用', value: 1 }
      ]
    },
    {
      field: 'createAt',
      id: 5,
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
