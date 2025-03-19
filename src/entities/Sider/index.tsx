import { RoutesEnum } from '../../shared/routes'

import UserIcon from '../../shared/assets/user-plus.svg?react'
import HomeIcon from '../../shared/assets/home.svg?react'
import DashboardIcon from '../../shared/assets/layout-dashboard.svg?react'
import { LinkStyled } from '../../shared/ui/atoms/Link/styled'

export const Sider = () => {
  return (
    <>
      <LinkStyled
        $variant='primary'
        to={RoutesEnum.HOME}
      >
        <HomeIcon />
      </LinkStyled>
      <div style={{ margin: 'auto 0', width: '100%', display: 'flex', flexDirection: 'column' }}>
        <LinkStyled
          $variant='leftBorder'
          to={RoutesEnum.DASHBOARD}
        >
          <DashboardIcon />
        </LinkStyled>
      </div>
      <LinkStyled
        $variant='leftBorder'
        to={RoutesEnum.LOGIN}
      >
        <UserIcon />
      </LinkStyled>
    </>
  )
}
