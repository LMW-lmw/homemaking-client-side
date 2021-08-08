import { ILogin } from './login/type'
export interface IRootState {
  name: string
}

export interface IRootWithModule {
  login: ILogin
}

export type IRoot = IRootState & IRootWithModule
