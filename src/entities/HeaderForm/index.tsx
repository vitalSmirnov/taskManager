import { Controller, useForm } from 'react-hook-form'
import { Filter, Sorting } from '../types/Todo/filter'
import { useEffect } from 'react'
import { useTodoStore } from '../../shared/state/mainSlice'
import { Button, Checkbox, Input } from 'antd'
import { StyledForm } from './styled'

import Asc from '../../shared/assets/sort-ascending.svg?react'
import Desc from '../../shared/assets/sort-descending.svg?react'

type HeaderFormType = Filter

export const HeaderForm = () => {
  const setFilters = useTodoStore(state => state.setFilters)
  const { watch, control } = useForm<HeaderFormType>({
    defaultValues: {
      search: '',
      status: '',
      sorting: Sorting.ASC,
      completed: false,
    },
  })

  useEffect(() => {
    const { unsubscribe } = watch(value => {
      console.log(value)
      setFilters({ ...value })
    })
    return () => unsubscribe()
  }, [watch])

  return (
    <StyledForm>
      <Controller
        name='search'
        control={control}
        render={({ field }) => (
          <>
            <Input
              id='searchInput'
              {...field}
              placeholder='Search'
            />
          </>
        )}
      />
      <Controller
        name='status'
        control={control}
        render={({ field }) => (
          <>
            <label htmlFor='status'>Status</label>
            <Input
              id='status'
              {...field}
              placeholder='Status'
            />
          </>
        )}
      />
      <Controller
        name='sorting'
        control={control}
        render={({ field }) => (
          <>
            <label>Sorting</label>
            <Button
              {...field}
              onClick={() => (field.value === Sorting.ASC ? Sorting.DESC : Sorting.ASC)}
            >
              {field.value == Sorting.ASC ? <Asc /> : <Desc />}
            </Button>
          </>
        )}
      />
      <Controller
        name='completed'
        control={control}
        render={({ field }) => (
          <Checkbox
            {...field}
            checked={field.value}
          />
        )}
      />
    </StyledForm>
  )
}
