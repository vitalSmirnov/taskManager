import styled from 'styled-components'

export const InputStyled = styled.input<{ $size?: string }>`
  box-sizing: border-box;
  font-size: ${({ $size }) => ($size ? $size : '1.5rem')};
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  background-color: transparent;

  &:user-invalid {
    color: red;
  }
`

export const WrapperWtyled = styled.div`
  box-sizing: border-box;
  display: flex;
  border: 2px solid #2b2b2b;
  border-radius: 8px;
  padding: 6px 8px;

  background-color: rgb(32, 32, 32);

  ${InputStyled}:user-invalid {
    border-color: red;
  }
`

export const LabelStyled = styled.label<{ $color?: string }>`
  font-size: 1.2rem;
  color: ${({ $color }) => $color || '#2b2b2b'};
  text-align: left;
  margin-bottom: 12px;
`
