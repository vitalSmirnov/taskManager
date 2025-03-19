import { useTodoStore } from '../../shared/state/mainSlice'
import styled from 'styled-components'
import { BackButton } from '../../entities/BackButton'
import { EditTodo } from '../../features/EditTodo'

export const TaskSider = () => {
  const seletedTodo = useTodoStore(state => state.selectedTodo)

  return (
    <StyledSider $open={seletedTodo !== undefined}>
      <BackButton />
      {seletedTodo && <EditTodo item={seletedTodo} />}
    </StyledSider>
  )
}

const StyledSider = styled.div<{ $open: boolean }>`
  position: relative;
  box-sizing: border-box;
  height: 100%;
  width: ${({ $open }) => ($open ? '400px' : '0')};
  padding: 1rem;
  color: #fff;
  border-radius: 1rem 0 0 1rem;
  padding: 1rem;
  overflow-x: hidden;
  overflow-y: auto;
  transition: all 0.3s ease-in-out;
  transform: ${({ $open }) => ($open ? 'translateX(0)' : 'translateX(100%)')};
  background-color: #000000;
`
