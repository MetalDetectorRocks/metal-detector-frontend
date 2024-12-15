import classes from './NavItem.module.scss'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import { NavLink } from 'react-router'
import * as React from 'react'

export type NavItemProps = {
  name: string
  path: string
  icon: React.ReactNode
}

const NavItem = (props: NavItemProps) => {
  return (
    <NavLink
      to={props.path}
      className={({ isActive }) => (isActive ? classes['nav__link--active'] : classes['nav__link'])}
    >
      <MenuItem className={classes['nav__item']}>
        <ListItemIcon>{props.icon}</ListItemIcon>
        {props.name}
      </MenuItem>
    </NavLink>
  )
}

export default NavItem
