import styled from 'styled-components'

export const CardStyled = styled.div`
  height: 100%;
  box-sizing: border-box;
  border: 2px solid rgb(169, 169, 169);
  box-shadow: 0 1px 1px 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 16px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  & > :first-child {
    width: 100%;
    border-bottom: 1px solid rgb(112, 112, 112);
  }

  & > :last-child {
    width: 100%;
    border-top: 1px solid rgb(112, 112, 112);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > .body {
    height: 100%;
  }
`
