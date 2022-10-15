import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../lib/contexts/auth'
import { Todo } from '../lib/models/todo'
import todoApi from '../lib/api/todo'
import { TodoForm, TodoList } from '../components/todo'
import todoManager from '../modules/todoManager'

const TodoPage = () => {
  const authCtx = useContext(AuthContext)
  const navigate = useNavigate()
  const [todos, setTodos] = useState<Todo[]>([])

  const handleCreateTodo = async (todo: string) => {
    const newTodo = await todoApi.createTodo({ todo })
    setTodos((prev) => [...prev, newTodo])
  }

  const handleDeleteTodo = async (todoId: number) => {
    const nextTodos = todos.filter((todo) => todo.id !== todoId)
    setTodos(nextTodos)
    await todoApi.deleteTodo(todoId)
  }

  const handleToggleTodo = async (toggledTodo: Todo) => {
    const nextTodos = todos.map((todo) => {
      if (todo.id === toggledTodo.id) {
        return { ...todo, isCompleted: !todo.isCompleted }
      }
      return todo
    })
    setTodos(nextTodos)
    todoManager.toggleTodo(toggledTodo)
  }

  const handleEditTodo = async (edittedTodo: Todo) => {
    const nextTodos = todos.map((todo) => {
      if (todo.id === edittedTodo.id) {
        return { ...todo, todo: edittedTodo.todo }
      }
      return todo
    })
    setTodos(nextTodos)
    await todoApi.updateTodo(edittedTodo.id, {
      todo: edittedTodo.todo,
      isCompleted: edittedTodo.isCompleted,
    })
  }

  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      navigate('/')
    } else {
      todoApi.getTodos().then((todos) => setTodos(todos.sort((a, b) => a.id - b.id)))
    }
  }, [authCtx.isLoggedIn])

  return (
    <>
      <Header>
        <h1>원티드 10월 프리온보딩 사전과제</h1>
        <button onClick={() => authCtx.logout()}>로그아웃</button>
      </Header>
      <Main>
        <Wrapper>
          <TodoForm style={{ marginBottom: '16px' }} onCreateTodo={handleCreateTodo} />
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
            onEditTodo={handleEditTodo}
          />
        </Wrapper>
      </Main>
    </>
  )
}

export default TodoPage

const Header = styled.header`
  margin-bottom: 24px;
  box-sizing: border-box;
  width: 100%;
  padding: 24px;
  border: 3px solid gray;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  width: 568px;
  padding: 24px;
`
