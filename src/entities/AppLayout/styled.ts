import styled from 'styled-components'

export const LayoutStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  display: flex;
  padding: 1rem 0;
`

export const NavSiderStyled = styled.aside`
  flex: 1;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 16px;
`

export const MainStyled = styled.main`
  flex: 20;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: #ffffff;
  overflow: hidden;
  border-radius: 1rem 0 0 1rem;
`

export const SiderStyled = styled.main`
  padding: 0;
  box-sizing: border-box;
  width: fit-content;
  height: 100%;
  background-color: #ffffff;
  overflow-y: auto;
  overflow-x: hidden;
`
