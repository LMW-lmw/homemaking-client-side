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
    url: LoginApi.UserMenus + id + '/menu',
    interceptors: {
      responseInterceptor: (data) => {
        if (data) {
          data.map((item: any) => {
            if (item.id == 38) {
              item.icon = 'icon-xitong1'
            }
            if (item.id == 1) {
              item.icon = 'icon-a-shezhi'
            }
            if (item.id == 9) {
              item.icon = 'icon-shangpin'
            }
            if (item.id == 41) {
              item.icon = 'icon-icon-say'
            }
          })
        }
        return data
      }
    }
  })
}
