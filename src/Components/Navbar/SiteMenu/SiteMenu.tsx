import { NavLink } from 'react-router'
import { blog, dashboard, home, InternalRoute, myArtists, releases } from '@/Router/InternalRoutes'
import classes from './SiteMenu.module.scss'
import Box from '@mui/material/Box'

export type SiteMenuProps = {
  authenticated: boolean
}

const SiteMenu = (props: SiteMenuProps) => {
  const guestMenu: Array<InternalRoute> = [home, blog, releases]
  const userMenu: Array<InternalRoute> = [dashboard, blog, myArtists, releases]
  const menu = props.authenticated ? userMenu : guestMenu

  const defaultClass = classes['site-menu__item']
  const activeClass = `${classes['site-menu__item']} ${classes['site-menu__item--active']}`

  return (
    <Box component={'nav'} className={classes['site-menu']}>
      {menu.map((items) => (
        <NavLink key={items.name} to={items.path} className={({ isActive }) => (isActive ? activeClass : defaultClass)}>
          {items.name}
        </NavLink>
      ))}
    </Box>
  )
}

export default SiteMenu
