import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../lib/contexts/auth'
import TodoForm from '../components/Todo/TodoForm'
import TodoList from '../components/Todo/TodoList'
import { useTodo } from '../lib/contexts/todo'

const TodoPage = () => {
  const authCtx = useContext(AuthContext)
  const { todos, createTodo, deleteTodo, editTodo, toggleTodo, getTodos } = useTodo()
  const navigate = useNavigate()

  useEffect(() => {
    if (authCtx.isLoggedIn && authCtx.token) {
      getTodos()
      return
    }
    if (!authCtx.isLoggedIn) {
      navigate('/')
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
          <TodoForm style={{ marginBottom: '16px' }} onCreateTodo={createTodo} />
          <TodoList
            todos={todos}
            onDeleteTodo={deleteTodo}
            onToggleTodo={toggleTodo}
            onEditTodo={editTodo}
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
