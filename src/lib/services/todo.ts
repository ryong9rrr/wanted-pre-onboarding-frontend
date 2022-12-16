import { Todo } from '../models/todo'
import Api from '../core/api'

export default class TodoService extends Api {
  async createTodo(requestBody: { todo: string }): Promise<Todo> {
    const response = await this.authInstance.post('/todos', requestBody)
    return response.data
  }

  async getTodos(): Promise<Todo[]> {
    const response = await this.authInstance.get('/todos')
    return response.data
  }

  async updateTodo(
    todoId: number,
    requestBody: { todo: string; isCompleted: boolean },
  ): Promise<Todo> {
    const response = await this.authInstance.put(`/todos/${todoId}`, requestBody)
    return response.data
  }

  async deleteTodo(todoId: number) {
    const response = await this.authInstance.delete(`/todos/${todoId}`)
    return response
  }
}
