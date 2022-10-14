import { Todo } from '../models/todo'
import Api from '../core/api'
import tokenStorage from '../utils/tokenStorage'

class TodoApi extends Api {
  async createTodo(requestBody: { todo: string }): Promise<Todo> {
    const response = await this.authInstance(tokenStorage.getToken()).post('/todos', requestBody)
    return response.data
  }

  async getTodos(): Promise<Todo[]> {
    const response = await this.authInstance(tokenStorage.getToken()).get('/todos')
    return response.data
  }

  async updateTodo(
    todoId: number,
    requestBody: { todo: string; isCompleted: boolean },
  ): Promise<Todo> {
    const response = await this.authInstance(tokenStorage.getToken()).put(
      `/todos/${todoId}`,
      requestBody,
    )
    return response.data
  }

  async deleteTodo(todoId: number) {
    const response = await this.authInstance(tokenStorage.getToken()).delete(`/todos/${todoId}`)
    return response
  }
}

const todoApi = new TodoApi()

export default todoApi
