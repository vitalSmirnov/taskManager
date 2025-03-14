import { Outlet } from 'react-router-dom'
import { LayoutStyled, MainStyled } from './styled'
import { Suspense } from 'react'

export const AuthTemplate = () => {
  return (
    <Suspense>
      <LayoutStyled>
        <MainStyled>
          <Suspense>
            <Outlet />
          </Suspense>
        </MainStyled>
      </LayoutStyled>
    </Suspense>
  )
}
