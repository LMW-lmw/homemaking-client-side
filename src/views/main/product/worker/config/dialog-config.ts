import { IForm } from '@/base-component/form'
export const dialogConfig: IForm = {
  rules: {
    name: [
      {
        required: true,
        message: '请输入姓名',
        trigger: 'blur'
      }
    ],
    type: [
      {
        required: true,
        message: '请选择行业类型',
        trigger: 'blur'
      }
    ],
    telephone: [
      {
        required: true,
        message: '请选输入电话号码',
        trigger: 'blur'
      }
    ],
    remuneration: [
      {
        required: true,
        message: '请选输入日薪',
        trigger: 'blur'
      }
    ]
  },
  formItems: [
    {
      id: 1,
      field: 'name',
      type: 'input',
      label: '姓名',
      placeholder: '请输入姓名'
    },
    {
      id: 2,
      field: 'type',
      type: 'select',
      label: '行业类型',
      options: [],
      placeholder: '请选择行业类型'
    },
    {
      id: 3,
      field: 'telephone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      id: 4,
      field: 'remuneration',
      type: 'input',
      label: '日薪',
      placeholder: '请输入日薪'
    }
  ],
  collLayout: {
    span: 24
  },
  itemStyle: {
    paddingRight: '10px'
  }
}
