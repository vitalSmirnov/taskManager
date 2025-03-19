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
  selectedTodo: Todo | undefined
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
    immer((set, get) => ({
      todos: [],
      selectedTodo: undefined,
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
            ...state.filters,
            sorting,
            completed,
            search,
            status,
          }
        })
      },
      getTodos: () => {
        const search = get().filters.search || ''
        const status = get().filters.status || ''
        const completed = get().filters.completed
        const sorting = get().filters.sorting ? Sorting.DESC : Sorting.ASC
        let response = get()
          .todos.filter(item => item.title.includes(search))
          .filter(item => item.status.includes(status))
          .sort((a, b) => {
            if (sorting === Sorting.ASC) {
              return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            } else {
              return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            }
          })

        if (completed) {
          response = response.filter(item => item.completed)
        }
        return {
          data: response,
        }
      },
      selectTodo: ({ todo }: SelectTodoPayload) => {
        set(state => {
          state.selectedTodo = todo
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

            state.selectedTodo = {
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
      partialize: state => ({
        todos: state.todos,
      }),
    }
  )
)
