import { Outlet } from 'react-router-dom'
import { LayoutStyled, MainStyled, NavSiderStyled } from './styled'
import { Suspense } from 'react'
import { Sider } from '../Sider'
import { TaskSider } from '../../widgets/TaskSider'

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
        <Suspense>
          <TaskSider />
        </Suspense>
      </LayoutStyled>
    </Suspense>
  )
}
