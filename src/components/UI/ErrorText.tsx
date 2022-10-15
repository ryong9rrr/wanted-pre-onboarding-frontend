import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'

interface ErrorTextProps extends HTMLAttributes<HTMLElement> {
  message: string
}

const ErrorText = ({ message, ...props }: ErrorTextProps) => {
  return <Container {...props}>{message}</Container>
}

export default ErrorText

const Container = styled.div`
  color: tomato;
`
