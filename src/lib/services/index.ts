import createStorage from '../repository'
import AuthService from './auth'
import TodoService from './todo'

const API_END_POINT = 'https://pre-onboarding-selection-task.shop/'
export const tokenStorage = createStorage('token', 'local')
export const authService = new AuthService(API_END_POINT, tokenStorage)
export const todoService = new TodoService(API_END_POINT, tokenStorage)
