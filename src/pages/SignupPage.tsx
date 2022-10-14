import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'
import { SignupForm } from '../components/auth'
import authApi from '../lib/api/auth'

const SignPage = () => {
  const [feedback, setFeedback] = useState<string | null>(null)
  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      await authApi.signup(values)
      setFeedback(`계정이 생성되었습니다! ${values.email}로 로그인해주세요.`)
    } catch (e) {
      if (axios.isAxiosError(e)) {
        if (e.response?.status === 400) {
          setFeedback('이미 존재하는 이메일이에요.')
          return
        }
      }
      setFeedback('회원가입에 실패했습니다. 현재 서버에 문제가 있는 것 같아요.')
    }
  }

  return (
    <Container>
      {feedback && <div>{feedback}</div>}
      <SignupForm onSubmit={handleSubmit} />
    </Container>
  )
}

export default SignPage

const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
