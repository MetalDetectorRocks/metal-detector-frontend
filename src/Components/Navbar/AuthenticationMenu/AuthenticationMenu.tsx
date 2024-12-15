import classes from './AuthenticationMenu.module.scss'
import Button from '@mui/material/Button'
import { signIn, signUp } from '@/Router/InternalRoutes'
import { NavLink } from 'react-router'
import { Stack } from '@mui/material'

const AuthenticationMenu = () => {
  return (
    <Stack direction={'row'} spacing={2} className={classes['authentication-menu']}>
      <Button variant="outlined" size={'small'} component={NavLink} to={signIn.path}>
        Sign in
      </Button>
      <Button variant="outlined" size={'small'} component={NavLink} to={signUp.path}>
        Sign up
      </Button>
    </Stack>
  )
}

export default AuthenticationMenu
