import { BASE_URL, TIME_OUT } from './request/config'
import LmwAxios from './request/index'
import storage from '@/utils/storage'
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
      return error
    }
  }
})
export default LmwRequest
