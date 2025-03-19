import { Todo } from '../types/Todo/todo'
import { useTodoStore } from '../../shared/state/mainSlice'
import { AppCard } from '../../shared/ui/atoms/Card'
import { Container } from '../../shared/ui/atoms/Container'
import styled from 'styled-components'

import Arrow from '../../shared/assets/arrow-right.svg?react'

type TaskItemProps = {
  todo: Todo
}

export const TaskItem = ({ todo }: TaskItemProps) => {
  const selectTodo = useTodoStore(state => state.selectTodo)
  const { body, title, status, author } = todo
  return (
    <AppCard
      title={title}
      footer={
        <StyledSelector onClick={() => selectTodo({ todo })}>
          Edit <Arrow width={'16px'} />
        </StyledSelector>
      }
    >
      <Container>
        <h2>{status}</h2>
        <p>{body}</p>
        <span>{author?.name}</span>
        <span>{author?.deviceId}</span>
      </Container>
    </AppCard>
  )
}

const StyledSelector = styled.a`
  padding: 0 10px;
  text-decoration: none;
  color: black;
  cursor: pointer;
  font-weight: bold;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: blue;
  }
`
