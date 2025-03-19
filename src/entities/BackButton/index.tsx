import { useTodoStore } from '../../shared/state/mainSlice'

import Plus from '../../shared/assets/plus.svg?react'
import { AppButton } from '../../shared/ui/atoms/Button'

export const BackButton = () => {
  const setSelectedTodo = useTodoStore(state => state.selectTodo)
  const handleClick = () => {
    setSelectedTodo({ todo: undefined })
  }
  return (
    <AppButton
      variant={'outlined'}
      onClick={handleClick}
    >
      <Plus style={{ rotate: '45deg', color: 'white' }} />
    </AppButton>
  )
}
