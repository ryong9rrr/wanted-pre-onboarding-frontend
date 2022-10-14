import todoApi from '../lib/api/todo'
import { Todo } from '../lib/models/todo'
import debounce from '../lib/utils/debounce'

interface ManagingTodo extends Todo {
  type: 'TOGGLE'
}

class TodoManager {
  taskQueue: ManagingTodo[] = []

  toggleTodo(toggledTodo: Todo) {
    const existingTaskIdx = this.taskQueue.findIndex((todo) => todo.id === toggledTodo.id)
    if (existingTaskIdx > -1) {
      this.taskQueue.splice(existingTaskIdx, 1)
    } else {
      this.taskQueue.push({ type: 'TOGGLE', ...toggledTodo })
    }
    debounce(async () => await this.run(), 1000)()
  }

  private async run() {
    while (this.taskQueue.length > 0) {
      const todo = this.taskQueue.shift() as ManagingTodo
      switch (todo.type) {
        case 'TOGGLE':
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
