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
  selectedTodo: string | undefined
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
  getSelectedTodo: () => Todo | undefined
}

export const useTodoStore = create<State & Actions>()(
  persist(
    immer((set, get) => ({
      todos: [],
      selectedTodo: '',
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
      getSelectedTodo: () => {
        if (get().selectedTodo === undefined) return undefined
        return get().todos.find(item => item.id === get().selectedTodo)
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
        const search = get().filters.search || ''
        const status = get().filters.status || ''
        const completed = get().filters.completed || undefined
        const sorting = get().filters.sorting || Sorting.ASC
        return {
          data: get()
            .todos.filter(item => item.title.includes(search))
            .filter(item => item.status.includes(status))
            .filter(item => item.completed === completed)
            .sort((a, b) => {
              if (sorting === Sorting.ASC) {
                return a.createdAt.getTime() - b.createdAt.getTime()
              } else {
                return b.createdAt.getTime() - a.createdAt.getTime()
              }
            }),
        }
      },
      selectTodo: ({ taskId }: SelectTodoPayload) => {
        set(state => {
          state.selectedTodo = taskId
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
      partialize: state => ({
        todos: state.todos,
      }),
    }
  )
)
