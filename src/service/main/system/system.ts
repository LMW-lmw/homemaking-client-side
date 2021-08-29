import LmwRequest from '@/service/index'
export function getPageListData(url: string, queryInfo: any) {
  return LmwRequest.post<any>({
    url: url,
    data: queryInfo
  })
}

export function deletData(url: string) {
  return LmwRequest.delete<any>({
    url
  })
}

export function editData(url: string, editData: any) {
  return LmwRequest.patch<any>({
    url,
    data: editData
  })
}

export function createData(url: string, newData: any) {
  return LmwRequest.post<any>({
    url,
    data: newData
  })
}
