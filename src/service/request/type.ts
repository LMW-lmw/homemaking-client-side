import type { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface LmwInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface LmwRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: LmwInterceptors<T>
  showLoading?: boolean
}
