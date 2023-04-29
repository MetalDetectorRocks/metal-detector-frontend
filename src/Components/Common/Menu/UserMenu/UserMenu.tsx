import IconButton from '@mui/material/IconButton'
import { AccountCircle } from '@mui/icons-material'
import Menu from '@mui/material/Menu'
import Box from '@mui/material/Box'
import classes from './UserMenu.module.scss'
import { useState, MouseEvent, ReactNode } from 'react'

export type UserMenuProps = {
  iconSize?: 'small' | 'medium' | 'large'
  menuItems: ReactNode
}

const UserMenu = (props: UserMenuProps) => {
  const [userMenu, setUserMenu] = useState<null | HTMLElement>(null)
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setUserMenu(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setUserMenu(null)
  }

  return (
    <>
      <IconButton size={props.iconSize || 'medium'} onClick={handleOpenUserMenu}>
        <AccountCircle fontSize={props.iconSize || 'medium'} color={'secondary'} />
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
        <Box component={'nav'}>{props.menuItems}</Box>
      </Menu>
    </>
  )
}

export default UserMenu
