import { IForm } from '@/base-component/form'
export const dialogConfig: IForm = {
  rules: {
    name: [
      {
        required: true,
        message: '请输入角色名',
        trigger: 'blur'
      }
    ],
    intro: [
      {
        required: true,
        message: '请输入角色权限',
        trigger: 'blur'
      }
    ]
  },
  formItems: [
    {
      id: 1,
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      id: 2,
      field: 'intro',
      type: 'input',
      label: '角色权限',
      placeholder: '请输入角色权限'
    }
  ],
  collLayout: {
    span: 24
  },
  itemStyle: {
    paddingRight: '10px'
  }
}
