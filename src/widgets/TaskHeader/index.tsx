import { HeaderForm } from '../../entities/HeaderForm'
import { Flex } from 'antd'
import { CreateTodoModal } from '../../features/CreateTodo'

export const TaskHeader = () => {
  return (
    <Flex
      align='end'
      gap={'16px'}
    >
      <HeaderForm />
      <CreateTodoModal />
    </Flex>
  )
}
