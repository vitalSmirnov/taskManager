import { Button, Input, Modal } from 'antd'

import Plus from '../../shared/assets/plus.svg?react'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { CreatePayload } from '../../shared/state/ActionsDataSource/sliceDataSource'
import { useTodoStore } from '../../shared/state/mainSlice'
import TextArea from 'antd/es/input/TextArea'
import { AppButton } from '../../shared/ui/atoms/Button'

type CreateTodoType = CreatePayload

export const CreateTodoModal = () => {
  const createTodo = useTodoStore(state => state.createTodo)
  const { control, handleSubmit } = useForm<CreateTodoType>({
    defaultValues: {
      title: '',
      body: '',
      status: 'pending',
      completed: false,
    },
  })
  const [open, setopen] = useState<boolean>(false)

  const onSubmit = (data: CreateTodoType) => {
    createTodo(data)
    setopen(false)
  }

  const handlerOpen = () => {
    setopen(!open)
  }
  return (
    <>
      <AppButton
        variant={'outlined'}
        onClick={handlerOpen}
      >
        <Plus />
      </AppButton>
      <Modal
        title='Create Todo'
        onCancel={() => setopen(false)}
        open={open}
        onClose={handlerOpen}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='title'
            control={control}
            render={field => {
              return (
                <Input
                  {...field.field}
                  placeholder='Title'
                />
              )
            }}
          />
          <Controller
            name='body'
            control={control}
            render={field => {
              return (
                <TextArea
                  {...field.field}
                  placeholder='Body'
                />
              )
            }}
          />
          <Controller
            name='status'
            control={control}
            render={field => {
              return (
                <Input
                  {...field.field}
                  placeholder='Status'
                />
              )
            }}
          />
          <Button htmlType='submit'>Done</Button>
          <Button
            danger
            onClick={() => setopen(false)}
          >
            Abort
          </Button>
        </form>
      </Modal>
    </>
  )
}
