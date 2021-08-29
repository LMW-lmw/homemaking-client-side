type IformType = 'input' | 'select' | 'password' | 'datepicker'
export interface IFormItem {
  id: number
  field: string
  type?: IformType
  label: string
  rules?: any[]
  placeholder?: string
  options?: any[]
  otherOptions?: any
  isHidden?: boolean
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  collLayout?: any
  itemStyle?: any
}
