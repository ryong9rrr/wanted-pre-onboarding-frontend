import React, { useMemo, useContext, useReducer, useEffect } from 'react'
import { TodoServiceInterface } from '../interface'
import { Todo } from '../models/todo'
import { todoModule } from '../../modules'

interface TodoContextValue {
  todos: Todo[]
  createTodo: (newTodo: string) => void
  deleteTodo: (todoId: number) => void
  toggleTodo: (todo: Todo) => void
  editTodo: (todo: Todo) => void
}

const initialTodoContextValue: TodoContextValue = {
  todos: [],
  createTodo(newTodo) {
    return
  },
  deleteTodo(todoId) {
    return
  },
  toggleTodo(todo) {
    return
  },
  editTodo(todo) {
    return
  },
}

const TodoContext = React.createContext(initialTodoContextValue)

export const useTodo = () => useContext(TodoContext)

export const TodoContextProvider = ({
  children,
  todoService,
}: {
  children: React.ReactNode
  todoService: TodoServiceInterface
}) => {
  const todoManager = useMemo(() => new todoModule.TodoManager(todoService), [])
  const [todos, dispatch] = useReducer(todoModule.todoReducer, [])

  const createTodo = async (todo: string) => {
    const newTodo = await todoService.createTodo({ todo })
    dispatch({ type: 'CREATE', newTodo })
  }

  const deleteTodo = async (todoId: number) => {
    dispatch({ type: 'DELETE', todoId })
    await todoService.deleteTodo(todoId)
  }

  const toggleTodo = async (toggledTodo: Todo) => {
    dispatch({ type: 'TOGGLE', todo: toggledTodo })
    todoManager.toggleTodo(toggledTodo)
  }

  const editTodo = async (edittedTodo: Todo) => {
    dispatch({ type: 'UPDATE', todo: edittedTodo })
    await todoService.updateTodo(edittedTodo.id, {
      todo: edittedTodo.todo,
      isCompleted: edittedTodo.isCompleted,
    })
  }

  useEffect(() => {
    todoService.getTodos().then((todos) => dispatch({ type: 'INITIALIZE', todos }))
  }, [])

  const contextValue = useMemo(
    () => ({
      todos,
      createTodo,
      deleteTodo,
      toggleTodo,
      editTodo,
    }),
    [todos],
  )

  return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
}
