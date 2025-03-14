import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const LinkStyled = styled(NavLink)`
  &.active {
    background-color: #88ce10;
  }
  color: white;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: rgb(87, 86, 86);
  transition: background-color 0.3s ease-in-out 0.2s;
`
