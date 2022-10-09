import Box from '@mui/material/Box'
import classes from './AuthBox.module.scss'
import { ReactNode } from 'react'
import { Alert } from '@mui/material'

export type AuthBoxProps = {
  children: ReactNode
  title: string
  errorMsg?: string
}

const AuthBox = (props: AuthBoxProps) => {
  return (
    <Box className={classes['auth-box']}>
      <h2 className={classes['auth-box__heading']}>{props.title}</h2>
      {props.errorMsg && (
        <Alert severity="error" variant={'filled'} className={classes['auth-box__error']}>
          {props.errorMsg}
        </Alert>
      )}
      {props.children}
    </Box>
  )
}

export default AuthBox
