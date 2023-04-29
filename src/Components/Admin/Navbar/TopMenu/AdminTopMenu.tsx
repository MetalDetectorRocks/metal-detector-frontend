import { AppBar, Toolbar } from '@mui/material'
import logo from '../../../../assets/img/logo.png'
import classes from './AdminTopMenu.module.scss'
import Box from '@mui/material/Box'
import { adminDashboard, home } from '../../../../Router/InternalRoutes'
import { Link } from 'react-router-dom'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PublicIcon from '@mui/icons-material/Public'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import UserMenu from '../../../Common/Menu/UserMenu/UserMenu'
import AdminUserMenuItems from './AdminUserMenuItems'

const AdminTopMenu = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} className={classes['app-bar']}>
      <Toolbar>
        <Link to={adminDashboard.path}>
          <Box component={'img'} alt={'Metal Detector Logo'} src={logo} className={classes['app-bar__logo']} />
        </Link>
        <Box flexGrow={1}></Box>
        <Box>
          <IconButton size="large" aria-label="go to public site" aria-controls="menu-appbar" color="inherit">
            <Link to={home.path} className={classes['app-bar__link']}>
              <PublicIcon fontSize={'medium'} color={'secondary'} />
            </Link>
          </IconButton>
          <IconButton
            size="large"
            aria-label="notifications of current admin"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            // onClick={handleMenu}
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <NotificationsIcon fontSize={'medium'} color={'secondary'} />
            </Badge>
          </IconButton>
          <UserMenu menuItems={<AdminUserMenuItems />} />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default AdminTopMenu
