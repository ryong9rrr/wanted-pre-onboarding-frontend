import React from 'react'
import styled from 'styled-components'
import { Todo } from '../../lib/models/todo'
import TodoItem from './TodoItem'

interface TodoListProps {
  todos: Todo[]
  onDeleteTodo: (todoId: number) => void
  onToggleTodo: (todo: Todo) => void
  onEditTodo: (todo: Todo) => void
}

const TodoList = ({ todos, onDeleteTodo, onToggleTodo, onEditTodo }: TodoListProps) => {
  return (
    <Container>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
          onEditTodo={onEditTodo}
        />
      ))}
    </Container>
  )
}

export default TodoList

const Container = styled.ul`
  margin: 0;
  padding: 0;
`
