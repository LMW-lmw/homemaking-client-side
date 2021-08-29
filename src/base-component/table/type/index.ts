export interface ITableItem {
  prop?: string
  label?: string
  minWidth?: string
  slotName?: string
}

export interface ITable {
  tableItem: ITableItem[]
  showIndex?: boolean
  showChoose?: boolean
  title?: string
  pagination?: boolean
  handleSlot?: any
  childrenProps?: any
}
