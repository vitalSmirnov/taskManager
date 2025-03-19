import { PropsWithChildren, ReactNode } from 'react'
import { CardStyled } from './styled'

interface AppCardProps extends PropsWithChildren {
  title?: string | ReactNode
  footer?: string | ReactNode
}

export const AppCard = ({ title, footer, children }: AppCardProps) => {
  return (
    <CardStyled>
      {title && <h2>{title}</h2>}
      <div className='body'>{children}</div>
      {footer && <div>{footer}</div>}
    </CardStyled>
  )
}
