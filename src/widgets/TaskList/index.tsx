import { TaskItem } from '../../entities/TaskItem'
import { useTodoStore } from '../../shared/state/mainSlice'
import { StyledList } from './styled'

export const TaskList = () => {
  const data = useTodoStore(state => state.todos)
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
