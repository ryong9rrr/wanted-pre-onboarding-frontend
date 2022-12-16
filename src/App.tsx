import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { TodoContextProvider } from './lib/contexts/todo'
import createStorage from './lib/repository'
import { todoService } from './lib/services'
import { SignupPage, TodoPage, LoginPage } from './pages'

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
