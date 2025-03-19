import { ComponentPropsWithRef } from 'react'
import { InputStyled, LabelStyled, WrapperWtyled } from './styled'

interface InputProps extends ComponentPropsWithRef<'input'> {
  label?: string
  error?: string
  tooltip?: string
  addonBefore?: string
  addonAfter?: string
  fontSize?: string
}

export const AppInput = ({
  addonAfter,
  addonBefore,
  error,
  label,
  color,
  tooltip,
  fontSize = '1.5rem',
  ...props
}: InputProps) => {
  const id = props.id || crypto.randomUUID()
  return (
    <div>
      {label && (
        <LabelStyled
          $color={color}
          htmlFor={id}
        >
          {label}
        </LabelStyled>
      )}
      <WrapperWtyled>
        {addonBefore && <span>{addonBefore}</span>}
        <InputStyled
          id={id}
          $size={fontSize}
          {...props}
        />
        {addonAfter && <span>{addonAfter}</span>}
      </WrapperWtyled>
    </div>
  )
}
