import { useForm } from 'react-hook-form'
import { Todo } from '../../entities/types/Todo/todo'
import { AppForm } from '../../shared/ui/atoms/Form'
import { EditPayload } from '../../shared/state/ActionsDataSource/sliceDataSource'
import { Container } from '../../shared/ui/atoms/Container'
import { AppTextarea } from '../../shared/ui/atoms/Textarea'
import { AppInput } from '../../shared/ui/atoms/Input'
import { AppButton } from '../../shared/ui/atoms/Button'
import { useTodoStore } from '../../shared/state/mainSlice'
import { AppCheckbox } from '../../shared/ui/atoms/Checkbox'

type EditTodoProps = {
  item: Todo
}

type EditFormTypes = EditPayload['data']

const isTouched = (touchedFields: any) => {
  return Object.keys(touchedFields).length > 0
}

export const EditTodo = ({ item }: EditTodoProps) => {
  const editTodo = useTodoStore(state => state.editTodo)
  const { title, body, completed, status } = item
  const {
    register,
    handleSubmit,
    reset,
    formState: { touchedFields },
  } = useForm<EditFormTypes>({
    defaultValues: {
      title: title,
      body: body,
      completed: completed,
      status: status,
    },
  })

  const onSubmit = (data: EditFormTypes) => {
    editTodo({ taskId: item.id, data })
  }

  const onReset = () => {
    reset()
  }

  if (item === undefined) {
    return <></>
  }
  return (
    <Container>
      <AppForm onSubmit={handleSubmit(onSubmit)}>
        <AppInput
          color='white'
          label='Title'
          fontSize='2rem'
          type='text'
          {...register('title')}
        />
        <AppInput
          color='white'
          label='Status'
          id='status'
          type='text'
          {...register('status')}
        />
        <AppCheckbox
          value='true'
          {...register('completed')}
        >
          <AppCheckbox.Trigger
            color='white'
            label='Completed'
            val='true'
          />
        </AppCheckbox>
        <AppTextarea
          rows={15}
          {...register('body')}
        />
        <div style={{ display: 'flex', gap: '1rem' }}>
          <AppButton
            variant='primary'
            type='submit'
          >
            Save
          </AppButton>
          {isTouched(touchedFields) && (
            <AppButton
              variant='danger'
              onClick={onReset}
            >
              Undo
            </AppButton>
          )}
        </div>
      </AppForm>
    </Container>
  )
}
