import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface AuthFormTemplateProps {
  type: 'login' | 'signup'
  children: React.ReactNode
}

const AuthFormTemplate = ({ type, children }: AuthFormTemplateProps) => {
  return (
    <Container>
      <h1>{type === 'login' ? '로그인' : '회원가입'}</h1>
      {children}
      <footer>
        {type === 'login' ? <Link to="/signup">회원가입</Link> : <Link to="/">로그인</Link>}
      </footer>
    </Container>
  )
}

export default AuthFormTemplate

const Container = styled.div`
  width: 400px;
  border: 3px solid gray;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    box-sizing: border-box;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  h1 {
    margin: 0;
    padding: 0;
  }

  button {
    padding: 4px 8px;
    font-size: 16px;
    margin: 10px 0 20px;
  }
`
