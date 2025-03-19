import styled from 'styled-components'

export const StyledLabel = styled.label<{ $color?: string }>`
  box-sizing: border-box;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: ${({ $color }) => $color || '#2b2b2b'};
`

export const StyledCheckbox = styled.input`
  box-sizing: border-box;
  border-radius: 0.25rem;
  accent-color: #ffffff;
`
