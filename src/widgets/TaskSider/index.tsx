import { useTodoStore } from '../../shared/state/mainSlice'
import { useEffect, useState } from 'react'
import { Todo } from '../../entities/types/Todo/todo'
import styled from 'styled-components'
import { BackButton } from '../../entities/BackButton'

export const TaskSider = () => {
  const getSelectedTodo = useTodoStore(state => state.getSelectedTodo)
  const seletedTodoId = useTodoStore(state => state.selectedTodo)
  const [selectedTodo, setSelectedTodo] = useState<Todo | undefined>(undefined)

  useEffect(() => {
    const todo = getSelectedTodo()
    if (todo !== undefined) {
      setSelectedTodo({ ...todo })
    } else {
      setSelectedTodo(undefined)
    }
  }, [seletedTodoId])

  return (
    <StyledSider $open={selectedTodo !== undefined}>
      <BackButton />
      {selectedTodo !== undefined && (
        <>
          <h1>{selectedTodo.title}</h1>
          <p>{selectedTodo.body}</p>
        </>
      )}
    </StyledSider>
  )
}

const StyledSider = styled.div<{ $open: boolean }>`
  box-sizing: border-box;
  height: 100%;
  width: ${({ $open }) => ($open ? '50%' : '0')};
  padding: 1rem;
  color: #fff;
  border-radius: 1rem 0 0 1rem;
  padding: 1rem;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  transform: ${({ $open }) => ($open ? 'translateX(0)' : 'translateX(100%)')};
  position: relative;
  background-color: #000000;
`
