import React from 'react'
import AuthFormField from './AuthFormField'
import AuthFormTemplate from './AuthFormTemplate'
import useForm from '../../lib/hooks/useForm'

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
  const { values, handleChange, handleSubmit, errors } = useForm({
    initialValues,
    onSubmit: () => {
      onSubmitAction(values)
    },
  })

  const submittable = values.email.includes('@') && values.password.length >= 8

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
