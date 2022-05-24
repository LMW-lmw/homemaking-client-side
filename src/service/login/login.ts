import send from '../index'
import { IAccount, ILoginRes } from './type'
enum LoginApi {
  AccountLogin = '/login',
  userInfo = '/users/',
  UserMenus = '/role/'
}
export function login(account: IAccount) {
  return send.post<ILoginRes>({
    url: LoginApi.AccountLogin,
    data: account
  })
}
export function getUserInfo(id: number) {
  return send.get<any>({
    url: LoginApi.userInfo + id
  })
}

export function getMenus(id: number) {
  return send.get<any>({
    url: LoginApi.UserMenus + id + '/menu'
  })
}
