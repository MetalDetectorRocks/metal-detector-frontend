import IconButton from '@mui/material/IconButton'
import { AccountCircle } from '@mui/icons-material'
import Menu from '@mui/material/Menu'
import Box from '@mui/material/Box'
import classes from './UserMenu.module.scss'
import { useState, MouseEvent } from 'react'
import UserMenuItems from './UserMenuItems'

const UserMenu = () => {
  const [userMenu, setUserMenu] = useState<null | HTMLElement>(null)
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setUserMenu(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setUserMenu(null)
  }

  return (
    <Box>
      <IconButton size="large" onClick={handleOpenUserMenu}>
        <AccountCircle fontSize={'large'} />
      </IconButton>
      <Menu
        id="user-menu"
        anchorEl={userMenu}
        open={Boolean(userMenu)}
        onClose={handleCloseUserMenu}
        onClick={handleCloseUserMenu}
        PaperProps={{
          elevation: 0,
          className: classes['user-menu'],
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box component={'nav'}>
          <UserMenuItems />
        </Box>
      </Menu>
    </Box>
  )
}

export default UserMenu
