import { Todo } from '../../models/todo'
import Api from '../core/api'

class TodoApi extends Api {
  async createTodo(requestBody: { todo: string }): Promise<Todo> {
    return await this.authInstance.post('/todos', requestBody)
  }

  async getTodos(): Promise<Todo[]> {
    return await this.authInstance.get('/todos')
  }

  async updateTodo(
    todoId: number,
    requestBody: { todo: string; isCompleted: boolean },
  ): Promise<Todo> {
    return await this.authInstance.put(`/todos/${todoId}`, requestBody)
  }

  async deleteTodo(todoId: number) {
    return await this.authInstance.delete(`/todos/${todoId}`)
  }
}

const todoApi = new TodoApi()

export default todoApi
