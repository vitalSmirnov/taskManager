import styled from 'styled-components'

export const StyledList = styled.div`
  box-sizing: border-box;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(300px, 1fr));
  padding: 16px 0;
  transition: all 1s ease-in-out;
`
