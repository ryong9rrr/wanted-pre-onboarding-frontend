import todoApi from '../lib/api/todo'
import { Todo } from '../lib/models/todo'
import debounce from '../lib/utils/debounce'

interface ManagingTodo extends Todo {
  type: 'toggle'
}

class TodoManager {
  todos: ManagingTodo[] = []

  toggleTodo(toggledTodo: Todo) {
    const existingTaskIdx = this.todos.findIndex((todo) => todo.id === toggledTodo.id)
    if (existingTaskIdx > -1) {
      this.todos.splice(existingTaskIdx, 1)
    } else {
      this.todos.push({ type: 'toggle', ...toggledTodo })
    }
    debounce(async () => await this.run(), 1000)()
  }

  private async run() {
    while (this.todos.length > 0) {
      const todo = this.todos.shift() as ManagingTodo
      switch (todo.type) {
        case 'toggle':
          await todoApi.updateTodo(todo.id, {
            todo: todo.todo,
            isCompleted: !todo.isCompleted,
          })
      }
    }
  }
}

const todoManager = new TodoManager()

export default todoManager
