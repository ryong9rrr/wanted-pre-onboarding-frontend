import React from 'react'
import styled from 'styled-components'
import { Todo } from '../../lib/models/todo'

interface TodoItemProps {
  todo: Todo
}

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <Container>
      <button>완료</button>
      <Title todo={todo}>{todo.todo}</Title>
      <button>수정</button>
      <button>삭제</button>
    </Container>
  )
}

export default TodoItem

const Container = styled.li`
  margin-bottom: 24px;
  display: flex;
  list-style: none;
  text-decoration: none;
`

const Title = styled.span<TodoItemProps>`
  font-size: 16px;
  font-weight: 500;
  text-decoration: ${({ todo }) => (todo.isCompleted ? 'line-through' : 'none')};
  flex: 1;
`