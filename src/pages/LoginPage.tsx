import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { LoginForm } from '../components/auth'
import authApi from '../lib/api/auth'

const LoginPage = () => {
  const navigate = useNavigate()
  const [feedback, setFeedback] = useState<string | null>(null)
  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      const { access_token } = await authApi.login(values)
      window.localStorage.setItem('wanted-jwt', access_token)
      navigate('/todo')
    } catch (e) {
      setFeedback('존재하지 않는 사용자 입니다.')
    }
  }

  return (
    <Container>
      {feedback && <div>{feedback}</div>}
      <LoginForm onSubmit={handleSubmit} />
    </Container>
  )
}

export default LoginPage

const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
