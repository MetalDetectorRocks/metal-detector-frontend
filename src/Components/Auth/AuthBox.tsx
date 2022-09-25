import Box from '@mui/material/Box'
import classes from './AuthBox.module.scss'
import { ReactNode } from 'react'

export type AuthBoxProps = {
  children: ReactNode
}

const AuthBox = (props: AuthBoxProps) => {
  return <Box className={classes['auth-box']}>{props.children}</Box>
}

export default AuthBox
