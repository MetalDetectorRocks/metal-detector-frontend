import Logout from '@mui/icons-material/Logout'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import { useNavigate } from 'react-router'
import classes from './AdminUserMenuItems.module.scss'
import useSignOut from '../../../../Hooks/Auth/useSignOut'
import { home, logout } from '@/Router/InternalRoutes'

const AdminUserMenuItems = () => {
  const navigate = useNavigate()
  const signOut = useSignOut()

  const handleSignOut = async () => {
    await signOut()
    navigate(home.path, { replace: true })
  }

  return (
    <>
      <Divider />
      <MenuItem onClick={handleSignOut} className={classes['user-menu__logout']}>
        <ListItemIcon>
          <Logout fontSize="small" color={'secondary'} />
        </ListItemIcon>
        {logout.name}
      </MenuItem>
    </>
  )
}

export default AdminUserMenuItems
