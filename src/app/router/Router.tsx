import { createBrowserRouter } from 'react-router-dom'
import { RoutesEnum } from '../../shared/routes'
import { lazy } from 'react'
import { AppTemplate } from '../../entities/AppLayout'
import { AuthTemplate } from '../../entities/AuthLayout'

const LoginPage = lazy(() => import('../../pages/Auth/Login'))
const RegisterPage = lazy(() => import('../../pages/Auth/Register'))
const HomePage = lazy(() => import('../../pages/App/Home'))

export const AppRouter = createBrowserRouter([
  {
    path: RoutesEnum.HOME,
    element: <AppTemplate />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: RoutesEnum.DASHBOARD,
        element: <></>,
      },
    ],
  },
  {
    path: RoutesEnum.AUTH,
    element: <AuthTemplate />,
    children: [
      {
        path: RoutesEnum.LOGIN,
        element: <LoginPage />,
      },
      {
        path: RoutesEnum.REGISTER,
        element: <RegisterPage />,
      },
    ],
  },
])
