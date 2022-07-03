import classes from './AuthenticationMenu.module.scss'
import Button from '@mui/material/Button'
import { login, register } from '../../../Router/InternalRoutes'
import { NavLink } from 'react-router-dom'
import { Stack } from '@mui/material'

const AuthenticationMenu = () => {
  return (
    <Stack direction={'row'} spacing={2} className={classes['authentication-menu']}>
      <Button variant="outlined" size={'small'} component={NavLink} to={login.path}>
        Sign in
      </Button>
      <Button variant="outlined" size={'small'} component={NavLink} to={register.path}>
        Sign up
      </Button>
    </Stack>
  )
}

export default AuthenticationMenu
