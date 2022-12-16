import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { TodoContextProvider } from './lib/contexts/todo'
import createStorage from './lib/repository'
import { TodoService } from './lib/services'
import { SignupPage, TodoPage, LoginPage } from './pages'

const API_END_POINT = 'https://pre-onboarding-selection-task.shop/'
const tokenStorage = createStorage('token', 'local')

const todoService = new TodoService(API_END_POINT, tokenStorage)

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route
        path="/todo"
        element={
          <TodoContextProvider todoService={todoService}>
            <TodoPage />
          </TodoContextProvider>
        }
      />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}

export default App
