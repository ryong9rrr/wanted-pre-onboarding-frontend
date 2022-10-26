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
  if (!token) {
    throw new Error('Unauthorized')
  }
  instance.interceptors.request.use(
    (config) => {
      if (config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      } else {
        config.headers = {
          Authorization: `Bearer ${token}`,
        }
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
