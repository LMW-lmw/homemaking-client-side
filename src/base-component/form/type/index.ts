type IformType = 'input' | 'select' | 'password' | 'datepicker'
export interface IFormItem {
  id: number
  //数据
  field: string
  //文本框类型
  type?: IformType
  //文本框左侧文字
  label: string
  //文本框规则
  rules?: any[]
  //文本框提示输入内容
  placeholder?: string
  //下拉选框
  options?: any[]
  //其他选框：比如日期区间
  otherOptions?: any
  //是否隐藏
  isHidden?: boolean
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  collLayout?: any
  itemStyle?: any
  rules?: any
}
