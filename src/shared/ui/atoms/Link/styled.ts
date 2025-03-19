import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

type StringVariants = 'leftBorder' | 'rightBorder' | 'primary'

const variants = {
  ['leftBorder']: css`
    border: 2px solid transparent;
    &.active {
      border-left: 2px solid white;
    }
  `,
  ['rightBorder']: css`
    border: 2px solid transparent;
    &.active {
      border-right: 2px solid white;
    }
  `,
  ['primary']: css`
    border-radius: 16px;
    &.active {
      background-color: rgb(158, 173, 89);
    }
  `,
  ['default']: css`
    color: #2b2b2b;
    padding: 0;
  `,
}

export const LinkStyled = styled(NavLink)<{ $variant?: StringVariants }>`
  box-sizing: border-box;
  color: white;
  text-decoration: none;
  padding: 8px;
  width: 100%;
  display: flex;
  place-content: center;
  transition: all 0.3s ease-in-out 0.2s;

  ${({ $variant }) => variants[$variant || 'default']}
`
