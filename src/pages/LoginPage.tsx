import React from 'react'
import styled from 'styled-components'
import { LoginForm } from '../components/auth'

const LoginPage = () => {
  const handleSubmit = (values: { email: string; password: string }) => {
    console.log(values)
  }

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit} />
    </Container>
  )
}

export default LoginPage

const Container = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
