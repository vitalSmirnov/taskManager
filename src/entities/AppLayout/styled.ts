import styled from 'styled-components'

export const LayoutStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  display: flex;
  background-color: #cccccc;
`

export const NavSiderStyled = styled.aside`
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background-color: #000000;
`

export const MainStyled = styled.main`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: #cccccc;
  overflow-y: auto;
  border-radius: 1rem 0 0 1rem;
`
