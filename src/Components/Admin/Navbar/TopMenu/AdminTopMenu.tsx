import { AppBar, Toolbar } from '@mui/material'
import logo from '../../../../assets/img/logo.png'
import classes from './AdminTopMenu.module.scss'
import Box from '@mui/material/Box'
import { home } from '../../../../Router/InternalRoutes'
import { Link } from 'react-router-dom'

const AdminTopMenu = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} className={classes['app-bar']}>
      <Toolbar>
        <Link to={home.path}>
          <Box component={'img'} alt={'Metal Detector Logo'} src={logo} className={classes['app-bar__logo']} />
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default AdminTopMenu
