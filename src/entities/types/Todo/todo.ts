export type Todo = {
  id: string
  title: string
  body: string
  completed: boolean
  status: string
  createdAt: Date
  updatedAt?: Date
  author?: {
    id: string
    name: string
    deviceId: string
  }
}

export type TodoShort = Pick<Todo, 'id' | 'title' | 'completed' | 'body' | 'status'>
