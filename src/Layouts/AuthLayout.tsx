import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import { home } from '../Router/InternalRoutes'

export const AuthLayout = () => {
  return (
    <>
      <Container maxWidth="sm">
        <a href={home.path}>
          <img src={logo} alt="Logo" />
        </a>
      </Container>
      <Outlet />
    </>
  )
}
