import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignupPage, TodoPage, LoginPage } from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}

export default App
