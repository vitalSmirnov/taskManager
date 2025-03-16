import { Button } from 'antd'
import { useTodoStore } from '../../shared/state/mainSlice'

import Plus from '../../shared/assets/plus.svg?react'

export const BackButton = () => {
  const setSelectedTodo = useTodoStore(state => state.selectTodo)
  const handleClick = () => {
    setSelectedTodo({ taskId: '' })
  }
  return (
    <Button onClick={handleClick}>
      <Plus style={{ rotate: '45deg' }} />
    </Button>
  )
}
