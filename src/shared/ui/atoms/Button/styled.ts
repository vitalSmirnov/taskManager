import styled, { css } from 'styled-components'

type ButtonVariant = 'default' | 'outlined' | 'danger' | 'primary' | 'info' | 'success'

const variants = {
  ['default']: css`
    background-color: #cccccc;
    color: #000;
    border: 1px solid #000;
    box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
  `,
  ['outlined']: css`
    background-color: transparent;
    color: #000;
    border: 2px solid #000;

    &:hover {
      background-color: #000;
      color: #fff;
    }

    &:active {
      background-color: rgb(57, 57, 57);
      color: #fff;
      border: 2px solid transparent;
    }
  `,
  ['danger']: css`
    background-color: #dc3545;
    color: #fff;
  `,
  ['primary']: css`
    background-color: #007bff;
    color: #fff;
  `,
  ['info']: css`
    background-color: #17a2b8;
    color: #fff;
  `,
  ['success']: css`
    background-color: #28a745;
    color: #fff;
  `,
}

export const ButtonStyled = styled.button<{ $variant: string; $block?: boolean }>`
  font-size: 1.1rem;
  border: none;
  width: ${({ $block }) => ($block ? '100%' : 'fit-content')};
  padding: 8px 12px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  ${({ $variant }) => variants[($variant as ButtonVariant) || 'default']}
  outline: none;
`
