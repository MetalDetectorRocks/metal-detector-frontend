import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import MenuPopover from '../Common/Menu/UserMenu/MenuPopover'
import SiteMenu from './SiteMenu/SiteMenu'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { Link } from 'react-router'
import { home } from '@/Router/InternalRoutes'
import classes from './Navbar.module.scss'
import IconButton from '@mui/material/IconButton'
import logo from '@/assets/img/logo.png'
import SearchBar from './SearchBar/SearchBar'
import MobileMenu from './MobileMenu/MobileMenu'
import { useState } from 'react'
import AuthenticationMenu from './AuthenticationMenu/AuthenticationMenu'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import useUser from '../../Hooks/Auth/useUser'
import UserMenuItems from './UserMenuItems/UserMenuItems'
import { AccountCircle } from '@mui/icons-material'

const Navbar = () => {
  const { isAuthenticated } = useUser()
  const [searchBarOpened, setSearchBarOpened] = useState(false)
  const theme = useTheme()
  const aboveMdBreakpoint = useMediaQuery(theme.breakpoints.up('md'))

  const handleOpenSearchBar = () => {
    setSearchBarOpened(!searchBarOpened)
  }

  const renderSearchBar = searchBarOpened || aboveMdBreakpoint
  const renderLogo = !searchBarOpened || aboveMdBreakpoint

  return (
    <AppBar position="static" className={classes['app-bar']}>
      <Box component={'div'} className={classes['app-bar__wrapper']}>
        <Toolbar disableGutters className={classes['app-bar__toolbar']}>
          {renderLogo && (
            <>
              <MobileMenu authenticated={isAuthenticated} />
              <Link to={home.path}>
                <Box component={'img'} className={classes['app-bar__logo']} alt={'Metal Detector Logo'} src={logo} />
              </Link>
            </>
          )}
          {renderSearchBar && <SearchBar autofocus={!aboveMdBreakpoint} />}
          <Box className={classes['app-bar__menu']}>
            <SiteMenu authenticated={isAuthenticated} />
            {!isAuthenticated && <AuthenticationMenu />}
            {isAuthenticated && (
              <MenuPopover icon={<AccountCircle color={'secondary'} />} content={<UserMenuItems />} />
            )}
          </Box>
          <IconButton
            edge="start"
            size="medium"
            className={classes['app-bar__search-icon']}
            onClick={handleOpenSearchBar}
            color={'secondary'}
          >
            {searchBarOpened ? <CloseIcon /> : <SearchIcon />}
          </IconButton>
        </Toolbar>
      </Box>
    </AppBar>
  )
}

export default Navbar
