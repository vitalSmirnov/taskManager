import { useEffect, useState } from 'react'
import { TaskItem } from '../../entities/TaskItem'
import { useTodoStore } from '../../shared/state/mainSlice'
import { StyledList } from './styled'
import { Todo } from '../../entities/types/Todo/todo'

export const TaskList = () => {
  const getTodos = useTodoStore(state => state.getTodos)
  const filters = useTodoStore(state => state.filters)
  const [data, setData] = useState<Todo[]>([])

  useEffect(() => {
    setData(getTodos().data)
  }, [filters])

  if (!data.length) {
    return <div>No todos</div>
  }

  return (
    <StyledList>
      {data.map((item, index) => (
        <TaskItem
          key={index}
          todo={item}
        />
      ))}
    </StyledList>
  )
}
