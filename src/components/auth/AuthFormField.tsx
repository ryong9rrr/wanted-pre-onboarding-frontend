import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { ErrorText } from '../ui'

interface FormFieldProp extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  errorText?: string
}

const FormField: React.ForwardRefRenderFunction<HTMLInputElement, FormFieldProp> = (
  { label, errorText, ...props }: FormFieldProp,
  ref,
) => {
  return (
    <Field>
      <label htmlFor={props.name}>{label}</label>
      <input ref={ref} autoComplete="off" {...props} />
      {errorText && <ErrorText message={errorText} />}
    </Field>
  )
}

export default React.forwardRef(FormField)

const Field = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  padding: 8px;
  gap: 4px;

  label {
    font-size: 18px;
    font-weight: 600;
  }

  input {
    height: 20px;
  }
`
