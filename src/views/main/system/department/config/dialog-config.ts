import { IForm } from '@/base-component/form'
export const dialogConfig: IForm = {
  rules: {
    name: [
      {
        required: true,
        message: '请输入类型名',
        trigger: 'blur'
      }
    ],
    leader: [
      {
        required: true,
        message: '负责人姓名',
        trigger: 'blur'
      }
    ]
  },
  formItems: [
    {
      id: 1,
      field: 'name',
      type: 'input',
      label: '类型名称',
      placeholder: '请输入类型名'
    },
    {
      id: 2,
      field: 'leader',
      type: 'input',
      label: '负责人',
      placeholder: '负责人姓名'
    }
  ],
  collLayout: {
    span: 24
  },
  itemStyle: {
    paddingRight: '10px'
  }
}
