import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import Box from '@mui/material/Box'
import classes from './MenuPopover.module.scss'
import { useState, MouseEvent, ReactNode } from 'react'

export type UserMenuProps = {
  icon: ReactNode
  iconSize?: 'small' | 'medium' | 'large'
  content: ReactNode
}

const MenuPopover = (props: UserMenuProps) => {
  const [userMenu, setUserMenu] = useState<null | HTMLElement>(null)
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setUserMenu(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setUserMenu(null)
  }

  return (
    <>
      <IconButton size={props.iconSize || 'medium'} onClick={handleOpenUserMenu} aria-haspopup="true" color="inherit">
        {props.icon}
      </IconButton>
      <Menu
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
        <Box component={'nav'}>{props.content}</Box>
      </Menu>
    </>
  )
}

export default MenuPopover
