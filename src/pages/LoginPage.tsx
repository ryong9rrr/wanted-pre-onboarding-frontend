import React from 'react'
import { LoginForm } from '../components/auth'

const LoginPage = () => {
  const handleSubmit = (values: { email: string; password: string }) => {
    console.log(values)
  }

  return (
    <>
      <LoginForm onSubmit={handleSubmit} />
    </>
  )
}

export default LoginPage
