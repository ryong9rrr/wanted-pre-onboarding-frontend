import React, { FormEvent, useRef } from 'react'
import AuthFormField from './AuthFormField'
import AuthFormTemplate from './AuthFormTemplate'

interface LoginFormProps {
  onSubmit: (values: { email: string; password: string }) => void
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const emailInput = useRef<HTMLInputElement>(null)
  const passwordInput = useRef<HTMLInputElement>(null)
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (emailInput.current && passwordInput.current) {
      onSubmit({ email: emailInput.current.value, password: passwordInput.current.value })
    }
  }

  return (
    <AuthFormTemplate type="login">
      <form onSubmit={handleSubmit}>
        <AuthFormField
          ref={emailInput}
          label="이메일"
          name="email"
          type="email"
          placeholder="이메일"
        />
        <AuthFormField
          ref={passwordInput}
          label="비밀번호"
          name="password"
          type="password"
          placeholder="비밀번호"
        />
        <button type="submit">제출</button>
      </form>
    </AuthFormTemplate>
  )
}

export default LoginForm
