import createStorage from '../repository'
import AuthApi from './auth'
import TodoApi from './todo'

const tokenStorage = createStorage('token', 'local')

const API_END_POINT = 'https://pre-onboarding-selection-task.shop/'

export const todoApi = new TodoApi(API_END_POINT, tokenStorage)
export const authApi = new AuthApi(API_END_POINT, tokenStorage)
