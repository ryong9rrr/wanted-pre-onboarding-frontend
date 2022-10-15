import React, { useState } from 'react'

export type Error<T> = { [K in keyof T]?: string }

interface Props<T> {
  initialValues: T
  onSubmit: (values: T) => void
  validate?: (values: T) => Error<T>
}

function useForm<T, U extends HTMLFormElement>({ initialValues, onSubmit, validate }: Props<T>) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<Error<T>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<U>) => {
    e.preventDefault()
    const newErrors = validate ? validate(values) : {}
    if (Object.keys(newErrors).length === 0) {
      onSubmit(values)
    }
    setErrors(newErrors)
  }

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  }
}

export default useForm
