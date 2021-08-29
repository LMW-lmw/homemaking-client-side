import { IForm } from '@/base-component/form'
export const formConfig: IForm = {
  labelWidth: '90px',
  itemStyle: { padding: '20px 20px 0px 20px' },
  formItems: [
    {
      field: 'name',
      id: 1,
      type: 'input',
      label: '角色名'
    },
    {
      field: 'intro',
      id: 2,
      type: 'input',
      label: '权限名'
    }
  ]
}
