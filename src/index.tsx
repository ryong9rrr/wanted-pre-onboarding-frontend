import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './lib/contexts/auth'
import createStorage from './lib/repository'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const tokenStorage = createStorage('token', 'local')

// const sampleStorage = createStorage('sample', 'session')

root.render(
  <AuthContextProvider tokenService={tokenStorage}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>,
)
