import classes from './MobileMenu.module.scss'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import CloseIcon from '@mui/icons-material/Close'
import UserMenuItems from '../UserMenu/UserMenuItems'
import SiteMenuItems from '../SiteMenu/SiteMenuItems'
import AuthenticationMenu from '../AuthenticationMenu/AuthenticationMenu'

export type MobileMenuProps = {
  authenticated: boolean
}

const MobileMenu = (props: MobileMenuProps) => {
  const pos = 'left'
  const [opened, setOpened] = useState(false)
  const toggleDrawer = () => {
    setOpened(!opened)
  }

  return (
    <>
      <Box component={'div'} className={classes['mobile-menu']}>
        <IconButton size="large" color="inherit" className={classes['mobile-menu__open-icon']} onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor={pos}
          open={opened}
          onClose={toggleDrawer}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <Box component={'div'} className={classes['mobile-menu__drawer']}>
            <Box component={'div'} className={classes['mobile-menu__control']}>
              <IconButton size="large" edge="start" color="inherit" onClick={toggleDrawer}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Box component={'nav'} onClick={toggleDrawer} className={classes['mobile-menu__nav']}>
              <SiteMenuItems authenticated={props.authenticated} />
              {props.authenticated && <Divider />}
              {props.authenticated && <UserMenuItems />}
            </Box>
            {!props.authenticated && <AuthenticationMenu />}
          </Box>
        </Drawer>
      </Box>
    </>
  )
}

export default MobileMenu
