import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { ElLoading, ElMessage } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'
import { LmwInterceptors, LmwRequestConfig } from './type'

class LmwAxios {
  instance: AxiosInstance
  interceptors?: LmwInterceptors
  loading?: ILoadingInstance
  showLoading: boolean
  constructor(config: LmwRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? true
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    // 全局请求拦截
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '加载中',
            background: 'rgba(0,0,0,0.5)'
          })
        }
        return config
      },
      (error) => {
        return error
      }
    )
    // 全局响应拦截
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        return res
      },
      (error) => {
        this.loading?.close()
        if (error.response.status === 404) {
          console.log('404的错误~')
        }
        return error
      }
    )
  }
  request<T = any>(config: LmwRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          this.showLoading = true
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = true
          reject(err)
          ElMessage.error('响应错误')
          return err
        })
    })
  }
  get<T = any>(config: LmwRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T = any>(config: LmwRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T = any>(config: LmwRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: LmwRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
export default LmwAxios
