import { Todo } from '~/lib/models/todo'

type TodoAction =
  | { type: 'INITIALIZE'; todos: Todo[] }
  | { type: 'CREATE'; newTodo: Todo }
  | { type: 'DELETE'; todoId: number }
  | { type: 'TOGGLE'; todo: Todo }
  | { type: 'UPDATE'; todo: Todo }

function todoReducer(todos: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case 'INITIALIZE':
      return [...action.todos]
    case 'CREATE':
      return [...todos, action.newTodo]
    case 'DELETE':
      return todos.filter((prevTodo) => prevTodo.id !== action.todoId)
    case 'TOGGLE':
      return todos.map((prevTodo) => {
        if (prevTodo.id === action.todo.id) {
          return { ...prevTodo, isCompleted: !prevTodo.isCompleted }
        }
        return prevTodo
      })
    case 'UPDATE':
      return todos.map((prevTodo) => {
        if (prevTodo.id === action.todo.id && prevTodo.todo !== action.todo.todo) {
          return { ...prevTodo, todo: prevTodo.todo }
        }
        return prevTodo
      })
    default:
      return todos
  }
}

export default todoReducer
