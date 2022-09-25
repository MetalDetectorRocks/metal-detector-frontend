import Box from '@mui/material/Box'
import classes from './AuthBox.module.scss'
import { ReactNode } from 'react'

export type AuthBoxProps = {
  children: ReactNode
  title: string
}

const AuthBox = (props: AuthBoxProps) => {
  return (
    <Box className={classes['auth-box']}>
      <h2 className={classes['auth-box__heading']}>{props.title}</h2>
      {props.children}
    </Box>
  )
}

export default AuthBox
