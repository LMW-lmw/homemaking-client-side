import { BASE_URL, TIME_OUT } from './request/config'
import LmwAxios from './request/index'
import storage from '@/utils/storage'
import { ElMessage } from 'element-plus'
import router from '@/router'
import { throttle } from '@/utils/throttle'

const throttleAlertMessage = throttle(ElMessage.error)
const LmwRequest = new LmwAxios({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // 单个实例的拦截
  interceptors: {
    requestInterceptor: (config) => {
      const token =
        storage.getItem('token', false) || storage.getItem('token') || ''
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (error) => {
      return error
    },
    responseInterceptor: (res) => {
      return res.data.data
    },
    responseInterceptorCatch: (error) => {
      const status: number = error.response.status
      const data = error.response.data.data
      switch (status) {
        case 401:
          throttleAlertMessage(data)
          storage.clear()
          router.push('/login')
          break
        case 400:
          throttleAlertMessage(data)
          break
        case 409:
          throttleAlertMessage(data)
          break
        case 404:
          throttleAlertMessage(data)
          break
        case 405:
          throttleAlertMessage(data)
          break
        default:
          throttleAlertMessage(data)
      }
      return error
    }
  }
})
export default LmwRequest
