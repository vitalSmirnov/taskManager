import { Wrap } from '@chakra-ui/react'
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
      <Wrap
        dir='column'
        spaceY='20px'
        marginY='auto'
      >
        <LinkStyled to={RoutesEnum.DASHBOARD}>
          <DashboardIcon />
        </LinkStyled>
      </Wrap>
      <LinkStyled to={RoutesEnum.LOGIN}>
        <UserIcon />
      </LinkStyled>
    </>
  )
}
