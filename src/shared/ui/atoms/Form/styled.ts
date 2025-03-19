import styled, { css } from 'styled-components'

type FormType = 'inline' | 'horizontal' | 'vertical'

export const FormStyled = styled.form<{ $layout: FormType; $gap: string }>`
  box-sizing: border-box;
  display: flex;
  gap: ${({ $gap }) => $gap};
  ${({ $layout }) =>
    $layout === 'horizontal'
      ? css`
          flex-direction: row;
          align-items: center;
        `
      : css`
          flex-direction: column;
        `};
  place-content: flex-start;
`
