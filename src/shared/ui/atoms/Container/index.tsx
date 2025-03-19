import styled from 'styled-components'

export const Container = styled.div<{ $flex?: boolean; $direction?: 'row' | 'column'; $gap?: string; $width?: string }>`
  box-sizing: border-box;
  height: 100%;
  display: ${({ $flex }) => ($flex ? 'flex' : 'block')};
  flex-direction: ${({ $direction }) => $direction};
  gap: ${({ $gap }) => $gap};
  width: ${({ $width }) => $width};
`
