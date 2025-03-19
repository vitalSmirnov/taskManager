import { useContext } from 'react'
import { CheckboxGroupContext } from '..'
import { StyledLabel } from '../styled'

interface TriggerProps {
  label: string
  val: any
  color?: string
}

export const Trigger = ({ label, val, color }: TriggerProps) => {
  const { name, value, ...props } = useContext(CheckboxGroupContext)!
  return (
    <StyledLabel
      $color={color}
      htmlFor={val}
    >
      <input
        id={val}
        name={name}
        type='checkbox'
        {...props}
      />
      {label}
    </StyledLabel>
  )
}
