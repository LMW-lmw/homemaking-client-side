import { IForm } from '@/base-component/form'
export const formConfig: IForm = {
  labelWidth: '90px',
  itemStyle: { padding: '20px 20px 0px 20px' },
  formItems: [
    {
      field: 'name',
      id: 1,
      type: 'input',
      label: '部门名称'
    },
    {
      field: 'leader',
      id: 2,
      type: 'input',
      label: '负责人'
    }
    // {
    //   field: 'createAt',
    //   id: 5,
    //   type: 'datepicker',
    //   lable: '创建时间',
    //   otherOptions: {
    //     placeholder: '选择日期',
    //     type: 'date'
    //   }
    // }
  ]
}
