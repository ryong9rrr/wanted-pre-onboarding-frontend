import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import tokenStorage from '../utils/tokenStorage'
const API_END_POINT = 'https://pre-onboarding-selection-task.shop/'

const createInstance = (url: string, config: AxiosRequestConfig = {}): AxiosInstance => {
  return axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json',
    },
    ...config,
  })
}

const auth = (instance: AxiosInstance) => {
  const token = tokenStorage.getToken()
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
