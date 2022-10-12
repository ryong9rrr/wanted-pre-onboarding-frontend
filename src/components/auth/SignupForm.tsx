import React, { ChangeEvent, useState } from 'react'
import useForm from '../../hooks/useForm'
import AuthFormField from './AuthFormField'
import AuthFormTemplate from './AuthFormTemplate'

interface ErrorTextProps {
  message: string
}

const ErrorText = ({ message }: ErrorTextProps) => {
  return <div style={{ color: 'tomato', marginTop: '3px' }}>{message}</div>
}

const SignupForm = () => {
  const { values, handleChange, handleSubmit, errors } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: () => {
      console.log(values)
    },
  })
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const passwordConfirmError = passwordConfirm.length > 0 && passwordConfirm !== values.password

  const handleChangePasswordConfirm = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value)
  }

  return (
    <AuthFormTemplate type="signup">
      <form>
        <AuthFormField
          label="이메일"
          name="email"
          type="email"
          placeholder="이메일"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <ErrorText message="이메일이 올바르지 않습니다." />}
        <AuthFormField
          label="비밀번호"
          name="password"
          type="password"
          placeholder="비밀번호"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <ErrorText message="비밀번호는 8자리 이상이어야 합니다." />}
        <AuthFormField
          label="비밀번호 확인"
          name="passwordConfirm"
          type="password"
          placeholder="비밀번호 확인"
          value={passwordConfirm}
          onChange={handleChangePasswordConfirm}
        />
        {passwordConfirmError && <ErrorText message="비밀번호가 동일하지 않습니다." />}
        <button type="submit">제출</button>
      </form>
    </AuthFormTemplate>
  )
}

export default SignupForm
