import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
const API_END_POINT = 'https://pre-onboarding-selection-task.shop/'

const createInstance = (url: string, config?: AxiosRequestConfig): AxiosInstance => {
  return axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json',
    },
    ...config,
  })
}

const auth = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.request.use(
    (config) => {
      const token = window.localStorage.getItem('access_token')
      config.headers = {
        Authorization: token || '',
      }
      return config
    },
    (error) => Promise.reject(error.response),
  )
  return instance
}

export default class Api {
  private readonly API_END_POINT = API_END_POINT
  protected baseInstance: AxiosInstance
  protected authInstance: AxiosInstance

  constructor() {
    const instance = createInstance(this.API_END_POINT)
    this.baseInstance = instance
    this.authInstance = auth(instance)
  }
}
