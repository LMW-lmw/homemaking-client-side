import { ILogin } from './login/type'
import { ISystem } from './main/system/type'
import { IDashboard } from './main/overview/type'
export interface IRootState {
  name: string
  department: any[]
  role: any[]
  menu: any[]
}

export interface IRootWithModule {
  login: ILogin
  system: ISystem
  dashboard: IDashboard
}

export type IRoot = IRootState & IRootWithModule
