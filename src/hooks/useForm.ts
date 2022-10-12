import React, { useState } from 'react'

export type Error<T> = { [K in keyof T]?: string }

interface Props<T> {
  initialValues: T
  onSubmit: (values: T) => void | Promise<void>
  validate?: (values: T) => Error<T>
}

function useForm<T, U extends HTMLFormElement>({ initialValues, onSubmit, validate }: Props<T>) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<Error<T>>({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<U>) => {
    e.preventDefault()
    setIsLoading(true)
    const newErrors = validate ? validate(values) : {}
    if (Object.keys(newErrors).length === 0) {
      await onSubmit(values)
    }
    setErrors(newErrors)
    setIsLoading(false)
  }

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  }
}

export default useForm
