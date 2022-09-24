import { NavLink } from 'react-router-dom'
import { imprint, privacyPolicy } from '../../Router/InternalRoutes'
import Box from '@mui/material/Box'
import classes from './AuthFooter.module.scss'

const AuthFooter = () => {
  return (
    <Box component={'div'} className={classes['auth-footer']}>
      <ul className={classes['auth-footer__menu']}>
        <li className={classes['auth-footer__menu-item']}>
          <NavLink to={imprint.path}>{imprint.name}</NavLink>
        </li>
        <li className={classes['auth-footer__menu-item']}>
          <NavLink to={privacyPolicy.path}>{privacyPolicy.name}</NavLink>
        </li>
      </ul>
    </Box>
  )
}

export default AuthFooter
