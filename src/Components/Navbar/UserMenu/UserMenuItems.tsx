import { AdminPanelSettings, Logout, Notifications, Settings } from '@mui/icons-material'
import MenuItem from '@mui/material/MenuItem'
import { Divider, ListItemIcon } from '@mui/material'
import Spotify from '../../Common/Spotify'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  adminDashboard,
  notificationSettings,
  account,
  spotifySynchronization,
  logout,
  home,
} from '../../../Router/InternalRoutes'
import classes from './UserMenuItems.module.scss'
import useUser from '../../../Hooks/Auth/useUser'
import useSignOut from '../../../Hooks/Auth/useSignOut'

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
      <NavLink to={account.path} className={({ isActive }) => (isActive ? classes['user-menu__item-active'] : '')}>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" color={'secondary'} />
          </ListItemIcon>
          {account.name}
        </MenuItem>
      </NavLink>
      <NavLink
        to={spotifySynchronization.path}
        className={({ isActive }) => (isActive ? classes['user-menu__item-active'] : '')}
      >
        <MenuItem>
          <ListItemIcon>
            <Spotify fontSize="small" color={'secondary'} />
          </ListItemIcon>
          {spotifySynchronization.name}
        </MenuItem>
      </NavLink>
      <NavLink
        to={notificationSettings.path}
        className={({ isActive }) => (isActive ? classes['user-menu__item-active'] : '')}
      >
        <MenuItem>
          <ListItemIcon>
            <Notifications fontSize="small" color={'secondary'} />
          </ListItemIcon>
          {notificationSettings.name}
        </MenuItem>
      </NavLink>
      {user?.isAdmin() && (
        <NavLink
          to={adminDashboard.path}
          className={({ isActive }) => (isActive ? classes['user-menu__item-active'] : '')}
        >
          <MenuItem>
            <ListItemIcon>
              <AdminPanelSettings fontSize="small" color={'secondary'} />
            </ListItemIcon>
            {adminDashboard.name}
          </MenuItem>
        </NavLink>
      )}
      <Divider />
      <MenuItem onClick={handleSignOut} className={classes['user-menu__item-logout']}>
        <ListItemIcon>
          <Logout fontSize="small" color={'secondary'} />
        </ListItemIcon>
        {logout.name}
      </MenuItem>
    </>
  )
}

export default UserMenuItems
