import React, { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface FormFieldProp extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const FormField: React.ForwardRefRenderFunction<HTMLInputElement, FormFieldProp> = (
  { label, ...props }: FormFieldProp,
  ref,
) => {
  return (
    <Field>
      <label htmlFor={props.name}>{label}</label>
      <input ref={ref} autoComplete="off" {...props} />
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