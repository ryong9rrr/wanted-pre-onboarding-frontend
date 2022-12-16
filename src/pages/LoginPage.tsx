import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import LoginForm from '../components/Auth/LoginForm'
import ErrorText from '../components/UI/ErrorText'
import { AuthContext } from '../lib/contexts/auth'

const LoginPage = () => {
  const authCtx = useContext(AuthContext)
  const navigate = useNavigate()
  const [feedback, setFeedback] = useState<string | null>(null)
  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      await authCtx.login(values)
      navigate('/todo')
    } catch (e) {
      if (axios.isAxiosError(e)) {
        if (e.response?.status === 401) {
          setFeedback('비밀번호가 틀렸습니다.')
          return
        }
        if (e.response?.status === 404) {
          setFeedback('존재하지 않는 사용자 입니다.')
          return
        }
      }
      setFeedback('회원가입에 실패했습니다. 현재 서버에 문제가 있는 것 같아요.')
    }
  }

  useEffect(() => {
    if (authCtx.isLoggedIn) {
      navigate('/todo')
    }
  }, [])

  return (
    <Container>
      {feedback && <ErrorText style={{ fontSize: '20px', fontWeight: 600 }} message={feedback} />}
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
