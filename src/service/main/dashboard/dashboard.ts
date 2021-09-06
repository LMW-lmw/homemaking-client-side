import LmwRequest from '@/service/index'

enum dashboardApi {
  categoryCount = '/goods/category/count',
  categorySale = '/goods/category/sale',
  categoryFavor = '/goods/category/favor',
  addressSale = '/goods/address/sale'
}

export function getCategoryCount() {
  return LmwRequest.get<any>({
    url: dashboardApi.categoryCount
  })
}

export function getCategorySale() {
  return LmwRequest.get<any>({
    url: dashboardApi.categorySale
  })
}
export function getCategoryFavor() {
  return LmwRequest.get<any>({
    url: dashboardApi.categoryFavor
  })
}
export function getAddressSale() {
  return LmwRequest.get<any>({
    url: dashboardApi.addressSale
  })
}
