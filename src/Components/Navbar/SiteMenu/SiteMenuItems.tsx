import { NavLink } from 'react-router-dom'
import { blog, dashboard, home, myArtists, releases } from '../../../Router/InternalRoutes'
import MenuItem from '@mui/material/MenuItem'
import { ListItemIcon } from '@mui/material'
import { Home, Dashboard, Article, Album, LibraryMusic } from '@mui/icons-material'
import classes from './SiteMenuItems.module.scss'

export type SiteMenuItemsProps = {
  authenticated: boolean
}

const SiteMenuItems = (props: SiteMenuItemsProps) => {
  return (
    <>
      {!props.authenticated && (
        <NavLink to={home.path} className={({ isActive }) => (isActive ? classes['site-menu__item-active'] : '')}>
          <MenuItem>
            <ListItemIcon>
              <Home fontSize="small" />
            </ListItemIcon>
            {home.name}
          </MenuItem>
        </NavLink>
      )}
      {props.authenticated && (
        <NavLink to={dashboard.path} className={({ isActive }) => (isActive ? classes['site-menu__item-active'] : '')}>
          <MenuItem>
            <ListItemIcon>
              <Dashboard fontSize="small" />
            </ListItemIcon>
            {dashboard.name}
          </MenuItem>
        </NavLink>
      )}
      <NavLink to={blog.path} className={({ isActive }) => (isActive ? classes['site-menu__item-active'] : '')}>
        <MenuItem>
          <ListItemIcon>
            <Article fontSize="small" />
          </ListItemIcon>
          {blog.name}
        </MenuItem>
      </NavLink>
      {props.authenticated && (
        <NavLink to={myArtists.path} className={({ isActive }) => (isActive ? classes['site-menu__item-active'] : '')}>
          <MenuItem>
            <ListItemIcon>
              <LibraryMusic fontSize="small" />
            </ListItemIcon>
            {myArtists.name}
          </MenuItem>
        </NavLink>
      )}
      <NavLink to={releases.path} className={({ isActive }) => (isActive ? classes['site-menu__item-active'] : '')}>
        <MenuItem>
          <ListItemIcon>
            <Album fontSize="small" />
          </ListItemIcon>
          {releases.name}
        </MenuItem>
      </NavLink>
    </>
  )
}

export default SiteMenuItems
