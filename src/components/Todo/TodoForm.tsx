import React, { ChangeEvent, FormEvent, useState } from 'react'
import styled, { CSSProperties } from 'styled-components'
import { Todo } from '../../lib/models/todo'

let id = 1

interface TodoFormProps {
  onCreateTodo: (newTodo: Todo) => void
  style?: CSSProperties
}

const TodoForm = ({ style, onCreateTodo }: TodoFormProps) => {
  const [value, setValue] = useState('')

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (value) {
      const newTodo: Todo = { id: id++, todo: value, isCompleted: false, userId: 1 }
      onCreateTodo(newTodo)
      setValue('')
    }
  }

  return (
    <Form onSubmit={handleSubmit} style={style}>
      <input placeholder="할 일을 입력해주세요." value={value} onChange={handleChangeValue} />
      <button type="submit">추가</button>
    </Form>
  )
}

export default TodoForm

const Form = styled.form`
  display: flex;
  height: 50px;
  input {
    box-sizing: border-box;
    flex: 1;
    outline: none;
    padding: 4px 16px;
    font-size: 16px;
  }

  button {
    width: 60px;
  }
`
