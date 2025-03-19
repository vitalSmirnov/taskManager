import { ComponentProps, PropsWithChildren } from 'react'
import { FormStyled } from './styled'

interface FormProps extends ComponentProps<'form'>, PropsWithChildren {
  layout?: 'horizontal' | 'vertical' | 'inline'
  gap?: string
}

export const AppForm = ({ layout = 'vertical', children, gap = '8px', ...props }: FormProps) => {
  return (
    <FormStyled
      $layout={layout}
      $gap={gap}
      {...props}
    >
      {children}
    </FormStyled>
  )
}
