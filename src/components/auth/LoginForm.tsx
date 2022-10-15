import React from 'react'
import AuthFormField from './AuthFormField'
import AuthFormTemplate from './AuthFormTemplate'
import useForm, { Error } from '../../lib/hooks/useForm'

interface LoginFormProps {
  onSubmit: (values: { email: string; password: string }) => void
}

type LoginFormSchema = {
  email: string
  password: string
}

const initialValues: LoginFormSchema = {
  email: '',
  password: '',
}

const LoginForm = ({ onSubmit: onSubmitAction }: LoginFormProps) => {
  const eamilValidation =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/g

  const { values, handleChange, handleSubmit, errors } = useForm({
    initialValues,
    onSubmit: () => {
      onSubmitAction(values)
    },
    validate: () => {
      const error = {} as Error<LoginFormSchema>
      if (!eamilValidation.test(values.email)) {
        error.email = '올바른 이메일 형식을 입력해주세요.'
      }
      if (values.password.length < 8) {
        error.password = '비밀번호는 8자리 이상이어야 합니다.'
      }
      return error
    },
  })

  const submittable = eamilValidation.test(values.email) && values.password.length >= 8

  return (
    <AuthFormTemplate type="login">
      <form onSubmit={handleSubmit}>
        <AuthFormField
          label="이메일"
          name="email"
          type="email"
          placeholder="이메일"
          value={values.email}
          onChange={handleChange}
          errorText={errors.email}
        />
        <AuthFormField
          label="비밀번호"
          name="password"
          type="password"
          placeholder="비밀번호"
          value={values.password}
          onChange={handleChange}
          errorText={errors.password}
        />
        <button disabled={!submittable} type="submit">
          제출
        </button>
      </form>
    </AuthFormTemplate>
  )
}

export default LoginForm
