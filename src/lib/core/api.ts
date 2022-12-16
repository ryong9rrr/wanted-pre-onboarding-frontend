import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { TokenServiceInterface } from '../interface'

export default class Api {
  private readonly API_END_POINT: string
  private tokenService: TokenServiceInterface

  protected baseInstance: AxiosInstance
  protected authInstance: AxiosInstance

  constructor(endPoint: string, tokenService: TokenServiceInterface) {
    this.API_END_POINT = endPoint
    this.tokenService = tokenService

    const instance = this.createInstance(this.API_END_POINT)
    this.baseInstance = instance
    this.authInstance = this.auth(instance)
  }

  private createInstance(endPoint: string, config: AxiosRequestConfig = {}): AxiosInstance {
    return axios.create({
      baseURL: endPoint,
      headers: {
        'Content-Type': 'application/json',
      },
      ...config,
    })
  }

  private auth(instance: AxiosInstance) {
    const token = this.tokenService.getToken()
    instance.interceptors.request.use(
      (config) => {
        const newConfig = { ...config }
        if (newConfig.headers && token) {
          newConfig.headers.Authorization = `Bearer ${token}`
        }
        return newConfig
      },
      (error) => Promise.reject(error.response),
    )
    return instance
  }
}
