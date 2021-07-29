import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'
interface LmwInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: any) => any
  responseInterceptorCatch?: (error: any) => any
}

interface LmwRequestConfig extends AxiosRequestConfig {
  interceptors?: LmwInterceptors
  showLoading?: boolean
}

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
        return error
      }
    )
  }
  request<T>(config: LmwRequestConfig): Promise<T> {
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
          console.log(res)
          resolve(res)
          this.showLoading = true
        })
        .catch((err) => {
          this.showLoading = true
          reject(err)
          return err
        })
    })
  }
  get<T>(config: LmwRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: LmwRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: LmwRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  pach<T>(config: LmwRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
export default LmwAxios
