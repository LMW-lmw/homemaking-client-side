import { BASE_URL, TIME_OUT } from './request/config'
import LmwAxios from './request/index'
import storage from '@/utils/storage'
import { ElMessage } from 'element-plus'
import router from '@/router'
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
      // if (error.status == 401) {
      //   console.log('身份验证失败')
      // }
      return error
    },
    responseInterceptor: (res) => {
      return res.data.data
    },
    responseInterceptorCatch: (error) => {
      console.log(error.response)
      const status: number = error.response.status
      if (status === 401) {
        ElMessage.error('请重新登录')
        storage.clear()
        router.push('/login')
      }
      return error
    }
  }
})
export default LmwRequest
