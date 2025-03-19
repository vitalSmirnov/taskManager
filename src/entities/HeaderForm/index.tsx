import { Controller, useForm } from 'react-hook-form'
import { Filter, Sorting } from '../types/Todo/filter'
import { useEffect } from 'react'
import { useTodoStore } from '../../shared/state/mainSlice'
import { App, Button, Checkbox, Input } from 'antd'

import Asc from '../../shared/assets/sort-ascending.svg?react'
import Desc from '../../shared/assets/sort-descending.svg?react'
import { AppForm } from '../../shared/ui/atoms/Form'
import { AppInput } from '../../shared/ui/atoms/Input'
import { AppCheckbox } from '../../shared/ui/atoms/Checkbox'

type HeaderFormType = Filter

export const HeaderForm = () => {
  const setFilters = useTodoStore(state => state.setFilters)
  const filters = useTodoStore(state => state.filters)
  const { watch, register } = useForm<HeaderFormType>({
    defaultValues: {
      search: filters.search,
      status: filters.status,
      sorting: filters.sorting,
      completed: filters.completed,
    },
    mode: 'onChange',
  })

  useEffect(() => {
    const { unsubscribe } = watch(value => {
      console.log(value)
      setFilters({ ...value })
    })
    return () => unsubscribe()
  }, [watch])

  return (
    <AppForm
      layout='horizontal'
      gap='16px'
    >
      <AppInput
        label='Search'
        {...register('search')}
        placeholder='search'
      />
      <AppInput
        label='Status'
        {...register('status')}
        placeholder='status'
      />
      <AppCheckbox {...register('completed')}>
        <AppCheckbox.Trigger
          label='Completed'
          val={true}
        />
      </AppCheckbox>
      <AppCheckbox {...register('sorting')}>
        <AppCheckbox.Trigger
          label='Descending'
          val={true}
        />
      </AppCheckbox>
    </AppForm>
  )
}
