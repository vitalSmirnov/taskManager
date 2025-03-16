import styled from 'styled-components'
import { Todo } from '../types/Todo/todo'
import { useTodoStore } from '../../shared/state/mainSlice'

type TaskItemProps = {
  todo: Todo
}

export const TaskItem = ({ todo }: TaskItemProps) => {
  const selectTodo = useTodoStore(state => state.selectTodo)
  const { id, body, title, status, author } = todo
  return (
    <Container>
      <h2>{title}</h2>
      <h2>{status}</h2>
      <p>{body}</p>
      <span>{author?.name}</span>
      <span>{author?.deviceId}</span>
      <a onClick={() => selectTodo({ taskId: id })}>Select</a>
    </Container>
  )
}

const Container = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 1rem 0.1rem rgba(0, 0, 0, 0.1);
  background-color: #fff;
`
