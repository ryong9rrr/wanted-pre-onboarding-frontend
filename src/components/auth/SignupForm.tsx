import React, { ChangeEvent, FormEvent, useMemo, useState } from 'react'
import AuthFormField from './AuthFormField'
import AuthFormTemplate from './AuthFormTemplate'

type Field = {
  value: string
  touched: boolean
  error: string | null
}

interface SignupFormProps {
  onSubmit: (values: { email: string; password: string }) => void
}

const SignupForm = ({ onSubmit }: SignupFormProps) => {
  const emailValidation =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/g

  const [email, setEmail] = useState<Field>({
    value: '',
    touched: false,
    error: '이메일을 입력해주세요.',
  })
  const [password, setPassword] = useState<Field>({
    value: '',
    touched: false,
    error: '비밀번호를 입력해주세요.',
  })
  const [passwordConfirm, setPasswordConfirm] = useState<Field>({
    value: '',
    touched: false,
    error: '비밀번호를 한번 더 입력해주세요.',
  })

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail({ error: null, touched: true, value: e.target.value })
  }

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword({ error: null, touched: true, value: e.target.value })
    if (passwordConfirm.touched && passwordConfirm.value !== e.target.value) {
      setPasswordConfirm((prev) => ({
        ...prev,
        error: '동일한 비밀번호가 아닙니다.',
      }))
    }
  }

  const handleChangePasswordConfirm = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm({
      error: password.value !== e.target.value ? '동일한 비밀번호가 아닙니다.' : null,
      touched: true,
      value: e.target.value,
    })
  }

  const handleBlurEmail = () => {
    if (!emailValidation.test(email.value.trim())) {
      setEmail((prev) => ({ ...prev, error: '올바른 이메일 형식이 아니에요.' }))
    } else {
      setEmail((prev) => ({ ...prev, error: null }))
    }
  }

  const handleBlurPassword = () => {
    if (password.value.length < 8) {
      setPassword((prev) => ({ ...prev, error: '비밀번호는 8자리 이상 입력해주세요.' }))
    } else {
      setPassword((prev) => ({ ...prev, error: null }))
    }

    if (passwordConfirm.touched && password.value === passwordConfirm.value) {
      setPasswordConfirm((prev) => ({ ...prev, error: null }))
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  const summittable =
    email.error === null && password.error === null && passwordConfirm.error === null

  return (
    <AuthFormTemplate type="signup">
      <form onSubmit={handleSubmit}>
        <AuthFormField
          label="이메일"
          name="email"
          type="email"
          placeholder="이메일"
          value={email.value}
          onChange={handleChangeEmail}
          onBlur={handleBlurEmail}
          errorText={email.touched && email.error ? email.error : ''}
        />
        <AuthFormField
          label="비밀번호"
          name="password"
          type="password"
          placeholder="비밀번호"
          value={password.value}
          onChange={handleChangePassword}
          onBlur={handleBlurPassword}
          errorText={password.touched && password.error ? password.error : ''}
        />
        <AuthFormField
          label="비밀번호 확인"
          name="passwordConfirm"
          type="password"
          placeholder="비밀번호 확인"
          value={passwordConfirm.value}
          onChange={handleChangePasswordConfirm}
          errorText={passwordConfirm.touched && passwordConfirm.error ? passwordConfirm.error : ''}
        />
        <button type="submit" disabled={!summittable}>
          제출
        </button>
      </form>
    </AuthFormTemplate>
  )
}

export default SignupForm
