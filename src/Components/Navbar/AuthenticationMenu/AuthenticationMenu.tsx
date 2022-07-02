import classes from './AuthenticationMenu.module.scss'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { login, register } from '../../../Router/InternalRoutes'
import { NavLink } from 'react-router-dom'

const AuthenticationMenu = () => {
  return (
    <Box component={'div'} className={classes['authentication-menu']}>
      <Button variant="outlined" size={'small'} component={NavLink} to={login.path}>
        Sign in
      </Button>
      <Button variant="outlined" size={'small'} component={NavLink} to={register.path}>
        Sign up
      </Button>
    </Box>
  )
}

export default AuthenticationMenu
