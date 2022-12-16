import { Todo } from '../models/todo'

export default interface TodoServiceInterface {
  createTodo: (requestBody: { todo: string }) => Promise<Todo>

  getTodos: () => Promise<Todo[]>

  updateTodo: (todoId: number, requestBody: { todo: string; isCompleted: boolean }) => Promise<Todo>

  deleteTodo: (todoId: number) => Promise<void>
}
