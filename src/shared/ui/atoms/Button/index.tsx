import { ComponentProps, PropsWithChildren } from 'react'
import { ButtonStyled } from './styled'

interface AppButtonProps extends PropsWithChildren, ComponentProps<'button'> {
  variant?: 'default' | 'outlined' | 'danger' | 'primary' | 'info' | 'success'
}

export const AppButton = ({ variant = 'default', children, ...props }: AppButtonProps) => {
  return (
    <ButtonStyled
      {...props}
      $variant={variant}
    >
      {children}
    </ButtonStyled>
  )
}
