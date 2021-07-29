import { BASE_URL, TIME_OUT } from './request/config'
import LmwAxios from './request/index'
const LmwRequest = new LmwAxios({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // 单个实例的拦截
  interceptors: {
    requestInterceptor: (config) => {
      return config
    },
    requestInterceptorCatch: (error) => {
      console.log('请求错误拦截')
      return error
    },
    responseInterceptor: (res) => {
      return res.data
    },
    responseInterceptorCatch: (error) => {
      console.log('响应错误拦截')
      return error
    }
  }
})
export default LmwRequest
