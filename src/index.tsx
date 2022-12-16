import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './lib/contexts/auth'
import { authService, tokenStorage } from './lib/services'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <AuthContextProvider authService={authService} tokenService={tokenStorage}>
      <App />
    </AuthContextProvider>
  </BrowserRouter>,
)
