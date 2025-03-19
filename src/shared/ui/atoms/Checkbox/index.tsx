import { ComponentPropsWithRef, createContext } from 'react'
import { Trigger } from './Trigger'
import { Container } from '../Container'
import { StyledLabel } from './styled'

type AppCheckboxDotProps = {
  Trigger: typeof Trigger
}

interface AppCheckboxProps extends Omit<ComponentPropsWithRef<'input'>, 'type'> {
  label?: string
  layout?: 'horizontal' | 'vertical'
  name: string
}
export const CheckboxGroupContext = createContext<Pick<AppCheckboxProps, 'name' | 'value'> | null>(null)

export const AppCheckbox: React.FC<AppCheckboxProps> & AppCheckboxDotProps = ({
  label,
  layout = 'horizontal',
  children,
  ...props
}) => {
  return (
    <CheckboxGroupContext.Provider value={{ ...props }}>
      <Container
        $flex
        $direction={layout === 'vertical' ? 'column' : 'row'}
      >
        {label && <StyledLabel>{label}</StyledLabel>}
        {children}
      </Container>
    </CheckboxGroupContext.Provider>
  )
}

AppCheckbox.Trigger = Trigger
