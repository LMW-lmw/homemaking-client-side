import LmwRequest from '@/service/index'

enum dashboardApi {
  categoryCount = '/echart/catary/top',
  categoryTop = '/echart/worker/top'
}

export function getCategoryCount() {
  return LmwRequest.get<any>({
    url: dashboardApi.categoryCount
  })
}

export function getCategoryTop() {
  return LmwRequest.get<any>({
    url: dashboardApi.categoryTop
  })
}
