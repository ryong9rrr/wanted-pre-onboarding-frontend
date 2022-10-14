import React from 'react'
import styled from 'styled-components'
import { SignupForm } from '../components/auth'

const SignPage = () => {
  const handleSubmit = (values: { email: string; password: string }) => {
    console.log(values)
  }

  return (
    <Container>
      <SignupForm onSubmit={handleSubmit} />
    </Container>
  )
}

export default SignPage

const Container = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
