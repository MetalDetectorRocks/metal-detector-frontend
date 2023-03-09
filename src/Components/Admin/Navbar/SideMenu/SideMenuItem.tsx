import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import classes from './AdminSideMenuItem.module.scss'
import * as React from 'react'
import { NavLink } from 'react-router-dom'
import Box from '@mui/material/Box'

export type SideMenuItemProps = {
  name: string
  path: string
  icon: React.ReactNode
}

export const SideMenuItem = (props: SideMenuItemProps) => {
  return (
    <Box component={'div'} className={classes['side-menu-item']}>
      <NavLink
        to={props.path}
        className={({ isActive }) =>
          isActive ? classes['side-menu-item__link-active'] : classes['side-menu-item__link']
        }
      >
        <ListItem disablePadding className={classes['side-menu-item__list-item']}>
          <ListItemButton>
            <ListItemIcon className={classes['side-menu-item__icon']}>{props.icon}</ListItemIcon>
            <ListItemText>
              <h3 className={classes['side-menu-item__heading']}>{props.name}</h3>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </NavLink>
    </Box>
  )
}

export default SideMenuItem
