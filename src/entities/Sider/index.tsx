import { RoutesEnum } from '../../shared/routes'
import { LinkStyled } from './styled'

import UserIcon from '../../shared/assets/user-plus.svg?react'
import HomeIcon from '../../shared/assets/home.svg?react'
import DashboardIcon from '../../shared/assets/layout-dashboard.svg?react'

export const Sider = () => {
  return (
    <>
      <LinkStyled to={RoutesEnum.HOME}>
        <HomeIcon />
      </LinkStyled>

      <LinkStyled to={RoutesEnum.DASHBOARD}>
        <DashboardIcon />
      </LinkStyled>
      <LinkStyled to={RoutesEnum.LOGIN}>
        <UserIcon />
      </LinkStyled>
    </>
  )
}
