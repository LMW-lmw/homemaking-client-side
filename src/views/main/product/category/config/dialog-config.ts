import { IForm } from '@/base-component/form'
export const dialogConfig: IForm = {
  formItems: [
    {
      id: 1,
      field: 'name',
      type: 'input',
      label: '类型名称',
      placeholder: '请输入类型名'
    }
  ],
  collLayout: {
    span: 24
  },
  itemStyle: {
    paddingRight: '10px'
  }
}
