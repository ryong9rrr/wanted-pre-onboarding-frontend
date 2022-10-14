import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../lib/contexts/auth'

const TodoPage = () => {
  const authCtx = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      navigate('/')
    }
  }, [])

  return <div>TodoPage</div>
}

export default TodoPage
