import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'
import classes from './AuthLayout.module.scss'
import logo from '../../assets/img/logo.png'
import AuthFooter from './AuthFooter'
import { home } from '../../Router/InternalRoutes'

export const AuthLayout = () => {
  return (
    <>
      <Container maxWidth="sm" className={classes['auth-container']}>
        <a href={home.path}>
          <img src={logo} alt="Logo" className={classes['auth-container__logo']} />
        </a>
        <Outlet />
        <AuthFooter />
      </Container>
    </>
  )
}
