import styled from 'styled-components'

export const LayoutStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 6fr 3fr;
  padding: 1rem;
`

export const NavSiderStyled = styled.aside`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #2f3c33;
`

export const MainStyled = styled.main`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: #f0f0f0;
  overflow-y: auto;
`

export const MainSiderStyled = styled.main`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #2f3c33;
`
