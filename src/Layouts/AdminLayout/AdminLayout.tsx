import classes from './AdminLayout.module.scss'
import { Outlet } from 'react-router-dom'
import AdminSideMenu from '../../Components/Admin/Navbar/SideMenu/AdminSideMenu'
import { Box, Container, Toolbar } from '@mui/material'
import AdminTopMenu from '../../Components/Admin/Navbar/TopMenu/AdminTopMenu'

export const AdminLayout = () => {
  return (
    <Box component="main" className={classes['main-wrapper']}>
      <AdminTopMenu />
      <AdminSideMenu />

      <Container className={classes['main-wrapper__content']}>
        <Toolbar />
        <Outlet />
      </Container>
    </Box>
  )
}
