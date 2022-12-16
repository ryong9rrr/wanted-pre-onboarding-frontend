import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './lib/contexts/auth'
import createStorage from './lib/repository'
import { AuthService, TodoService } from './lib/services'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const API_END_POINT = 'https://pre-onboarding-selection-task.shop/'
const tokenStorage = createStorage('token', 'local')

const authService = new AuthService(API_END_POINT, tokenStorage)

root.render(
  <AuthContextProvider authService={authService} tokenService={tokenStorage}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>,
)
