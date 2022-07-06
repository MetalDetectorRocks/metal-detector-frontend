import { AdminPanelSettings, Logout, Notifications, Settings } from '@mui/icons-material'
import MenuItem from '@mui/material/MenuItem'
import { Divider, ListItemIcon } from '@mui/material'
import Spotify from '../../Common/Spotify'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  adminArea,
  notificationSettings,
  account,
  spotifySynchronization,
  logout,
  home,
} from '../../../Router/InternalRoutes'
import { useState } from 'react'
import classes from './UserMenuItems.module.scss'

const UserMenuItems = () => {
  const navigate = useNavigate()
  const [isAdmin] = useState(true) // ToDo: init isAdmin vs. isUser
  const handleLogout = () => {
    // ToDo: Handle Logout
    navigate(home.path, { replace: true })
  }

  return (
    <>
      <NavLink to={account.path} className={({ isActive }) => (isActive ? classes['user-menu__item-active'] : '')}>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
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
            <Spotify fontSize="small" />
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
            <Notifications fontSize="small" />
          </ListItemIcon>
          {notificationSettings.name}
        </MenuItem>
      </NavLink>
      {isAdmin && (
        <NavLink to={adminArea.path} className={({ isActive }) => (isActive ? classes['user-menu__item-active'] : '')}>
          <MenuItem>
            <ListItemIcon>
              <AdminPanelSettings fontSize="small" />
            </ListItemIcon>
            {adminArea.name}
          </MenuItem>
        </NavLink>
      )}
      <Divider />
      <MenuItem onClick={handleLogout} className={classes['user-menu__item-logout']}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        {logout.name}
      </MenuItem>
    </>
  )
}

export default UserMenuItems
