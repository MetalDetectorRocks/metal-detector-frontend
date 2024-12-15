import AdminPanelSettings from '@mui/icons-material/AdminPanelSettings'
import Logout from '@mui/icons-material/Logout'
import Notifications from '@mui/icons-material/Notifications'
import Settings from '@mui/icons-material/Settings'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import Spotify from '../../Common/Icon/Spotify'
import { useNavigate } from 'react-router'
import {
  adminDashboard,
  notificationSettings,
  account,
  spotifySynchronization,
  logout,
  home,
} from '@/Router/InternalRoutes'
import classes from './UserMenuItems.module.scss'
import useUser from '../../../Hooks/Auth/useUser'
import useSignOut from '../../../Hooks/Auth/useSignOut'
import NavItem from '../../Common/Menu/NavItem/NavItem'

const UserMenuItems = () => {
  const navigate = useNavigate()
  const signOut = useSignOut()
  const { user } = useUser()

  const handleSignOut = async () => {
    await signOut()
    navigate(home.path, { replace: true })
  }

  return (
    <>
      <NavItem name={account.name} path={account.path} icon={<Settings fontSize="small" color={'secondary'} />} />
      <NavItem
        name={spotifySynchronization.name}
        path={spotifySynchronization.path}
        icon={<Spotify fontSize="small" color={'secondary'} />}
      />
      <NavItem
        name={notificationSettings.name}
        path={notificationSettings.path}
        icon={<Notifications fontSize="small" color={'secondary'} />}
      />
      {user?.isAdmin() && (
        <NavItem
          name={'Admin area'}
          path={adminDashboard.path}
          icon={<AdminPanelSettings fontSize="small" color={'secondary'} />}
        />
      )}
      <Divider />
      <MenuItem onClick={handleSignOut} className={classes['user-menu__logout']}>
        <ListItemIcon>
          <Logout fontSize="small" color={'secondary'} />
        </ListItemIcon>
        {logout.name}
      </MenuItem>
    </>
  )
}

export default UserMenuItems
