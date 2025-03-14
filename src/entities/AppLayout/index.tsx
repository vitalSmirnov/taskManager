import { Outlet } from 'react-router-dom'
import { LayoutStyled, MainSiderStyled, MainStyled, NavSiderStyled } from './styled'
import { Suspense } from 'react'
import { Sider } from '../Sider'

export const AppTemplate = () => {
  return (
    <Suspense>
      <LayoutStyled>
        <NavSiderStyled>
          <Sider />
        </NavSiderStyled>
        <MainStyled>
          <Suspense>
            <Outlet />
          </Suspense>
        </MainStyled>
        <MainSiderStyled>
          <Suspense></Suspense>
        </MainSiderStyled>
      </LayoutStyled>
    </Suspense>
  )
}
