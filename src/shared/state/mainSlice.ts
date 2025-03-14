import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist } from 'zustand/middleware'
import { Todo } from '../../entities/types/Todo/todo'
import {
  CreatePayload,
  DeletePayload,
  EditPayload,
  GetTodoPayload,
  GetTodoResponse,
  SelectTodoPayload,
  ToggleTodoPayload,
} from './ActionsDataSource/sliceDataSource'
import { Filter, Sorting } from '../../entities/types/Todo/filter'

type State = {
  todos: Todo[]
  selectedTodo: Todo
  filters: Filter
}

type Actions = {
  getTodos: () => GetTodoResponse
  setFilters: (body: GetTodoPayload) => void
  createTodo: (body: CreatePayload) => void
  deleteTodo: (body: DeletePayload) => void
  toggleTodo: (body: ToggleTodoPayload) => void
  editTodo: (body: EditPayload) => void
  selectTodo: (body: SelectTodoPayload) => void
}

export const useTodoStore = create<State & Actions>()(
  persist(
    immer(set => ({
      todos: [],
      selectedTodo: {} as Todo,
      filters: {
        sorting: Sorting.ASC,
        completed: undefined,
        search: '',
        status: '',
      },
      toggleTodo: ({ taskId }: ToggleTodoPayload) => {
        set(state => {
          const todo = state.todos.find(item => item.id === taskId)
          if (todo) todo.completed = !todo.completed
        })
      },
      createTodo: ({ body = '', title = '', completed = false, status = 'unstarted' }: CreatePayload) => {
        const data: Todo = {
          id: crypto.randomUUID().toString(),
          title,
          body,
          completed,
          status,
          createdAt: new Date(),
        }
        set(state => {
          state.todos.push(data)
        })
      },
      deleteTodo: ({ taskId }: DeletePayload) => {
        set(state => {
          const deletedIndex = state.todos.findIndex(item => item.id === taskId)
          if (deletedIndex !== -1) state.todos.splice(deletedIndex, 1)
        })
      },
      setFilters({ sorting = Sorting.ASC, completed, search, status }: GetTodoPayload) {
        set(state => {
          state.filters = {
            sorting,
            completed,
            search,
            status,
          }
        })
      },
      getTodos: () => {
        let todos: Todo[] = []
        set(state => {
          const { search, completed, status, sorting } = state.filters
          todos = state.todos
          if (search) todos = todos.filter(item => item.title.includes(search))
          if (completed) todos = todos.filter(item => item.completed === completed)
          if (status) todos = todos.filter(item => item.status.includes(status))
          todos = todos.sort((a, b) => {
            if (sorting === Sorting.ASC) {
              return a.createdAt.getTime() - b.createdAt.getTime()
            } else {
              return b.createdAt.getTime() - a.createdAt.getTime()
            }
          })
        })
        return {
          data: todos,
        }
      },
      selectTodo: ({ taskId }: SelectTodoPayload) => {
        set(state => {
          const deletedIndex = state.todos.findIndex(item => item.id === taskId)
          if (deletedIndex !== -1) {
            state.selectedTodo = state.todos[deletedIndex]
          }
        })
      },
      editTodo: ({ data, taskId }: EditPayload) => {
        set(state => {
          const todoIndex = state.todos.findIndex(item => item.id === taskId)
          if (todoIndex !== -1) {
            state.todos[todoIndex] = {
              ...state.todos[todoIndex],
              ...data,
              updatedAt: new Date(),
            }
          }
        })
      },
    })),
    {
      version: 0,
      name: 'todos',
    }
  )
)
