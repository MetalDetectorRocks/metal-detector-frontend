import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import UserMenu from './UserMenu/UserMenu'
import SiteMenu from './SiteMenu/SiteMenu'
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'
import { home } from '../../Router/InternalRoutes'
import classes from './Navbar.module.scss'
import IconButton from '@mui/material/IconButton'
import logo from './../../assets/img/logo.png'
import SearchBar from './SearchBar/SearchBar'
import MobileMenu from './MobileMenu/MobileMenu'
import { useState } from 'react'
import AuthenticationMenu from './AuthenticationMenu/AuthenticationMenu'

const Navbar = () => {
  const [authenticated] = useState(false) // ToDo DanielW: Init auth state
  return (
    <AppBar position="static" className={classes['app-bar']}>
      <Box component={'div'} className={classes['app-bar__wrapper']}>
        <Toolbar disableGutters className={classes['app-bar__toolbar']}>
          <MobileMenu authenticated={authenticated} />
          <Link to={home.path}>
            <Box component={'img'} className={classes['app-bar__logo']} alt={'Metal Detector Logo'} src={logo} />
          </Link>
          <SearchBar />
          <Box className={classes['app-bar__menu']}>
            <SiteMenu authenticated={authenticated} />
            {!authenticated && <AuthenticationMenu />}
            {authenticated && <UserMenu />}
          </Box>
          <IconButton size="large" edge="start" color="inherit" className={classes['app-bar__search-icon']}>
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </Box>
    </AppBar>
  )
}

export default Navbar
