import { ComponentProps } from 'react'
import { TextareaStyled } from './styled'

interface TextareaProps extends ComponentProps<'textarea'> {
  rows?: number
}

export const AppTextarea = ({ rows = 5, ...props }: TextareaProps) => {
  return (
    <TextareaStyled
      {...props}
      rows={rows}
    />
  )
}
