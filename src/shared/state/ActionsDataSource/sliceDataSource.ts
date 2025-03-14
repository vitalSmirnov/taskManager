import { Filter } from '../../../entities/types/Todo/filter'
import { Todo } from '../../../entities/types/Todo/todo'

export type CreatePayload = {
  title?: string
  body?: string
  completed?: boolean
  status?: string
}
export type CreateResponse = {
  data: Todo
}

export type EditPayload = {
  taskId: string
  data: {
    title?: string
    body?: string
    completed?: boolean
    status?: string
  }
}
export type EditResponse = {
  data: Todo
}

export type ToggleTodoPayload = {
  taskId: string
}
export type ToggleTodoResponse = {
  data: Todo
}

export type DeletePayload = {
  taskId: string
}
export type DeleteResposne = {}

export type SelectTodoPayload = {
  taskId: string
}
export type SelectTodoResponse = {
  data: Todo
}

export type GetTodoPayload = Filter
export type GetTodoResponse = {
  data: Todo[]
}
