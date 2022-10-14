import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../lib/contexts/auth'
import { Todo } from '../lib/models/todo'
import todoApi from '../lib/api/todo'

const TodoPage = () => {
  const authCtx = useContext(AuthContext)
  const navigate = useNavigate()
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    todoApi.getTodos().then((todos) => setTodos(todos))
  }, [])

  useEffect(() => {
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
      <Main>메인</Main>
    </>
  )
}

export default TodoPage

const Header = styled.header`
  box-sizing: border-box;
  width: 100%;
  padding: 24px;
  border: 3px solid gray;
`

const Main = styled.main`
  box-sizing: border-box;
  background-color: green;
`
