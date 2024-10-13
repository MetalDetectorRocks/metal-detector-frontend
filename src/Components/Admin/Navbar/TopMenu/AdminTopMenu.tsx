import { AppBar, Toolbar } from '@mui/material'
import logo from '@/assets/img/logo.png'
import classes from './AdminTopMenu.module.scss'
import Box from '@mui/material/Box'
import { adminDashboard, home } from '@/Router/InternalRoutes'
import { Link } from 'react-router-dom'
import PublicIcon from '@mui/icons-material/Public'
import IconButton from '@mui/material/IconButton'
import MenuPopover from '../../../Common/Menu/UserMenu/MenuPopover'
import AdminUserMenuItems from './AdminUserMenuItems'
import { AccountCircle } from '@mui/icons-material'
import Badge from '@mui/material/Badge'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AdminNotificationsContent from './AdminNotificationsContent'

const AdminTopMenu = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} className={classes['app-bar']}>
      <Toolbar>
        <Link to={adminDashboard.path}>
          <Box component={'img'} alt={'Metal Detector Logo'} src={logo} className={classes['app-bar__logo']} />
        </Link>
        <Box flexGrow={1}></Box>
        <Box>
          <MenuPopover
            icon={
              <Badge badgeContent={4} color="error" max={9}>
                <NotificationsIcon color={'secondary'} />
              </Badge>
            }
            content={<AdminNotificationsContent />}
          />
          <IconButton size="large" aria-label="go to public site" aria-controls="menu-appbar" color="inherit">
            <Link to={home.path} className={classes['app-bar__link']}>
              <PublicIcon fontSize={'medium'} color={'secondary'} />
            </Link>
          </IconButton>
          <MenuPopover icon={<AccountCircle color={'secondary'} />} content={<AdminUserMenuItems />} />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default AdminTopMenu
