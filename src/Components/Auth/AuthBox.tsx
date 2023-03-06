import Box from '@mui/material/Box'
import classes from './AuthBox.module.scss'
import { ReactNode } from 'react'
import { Alert } from '@mui/material'

export type AuthBoxProps = {
  children: ReactNode
  title: string
  errorMsg?: string
  successMsg?: string
}

const AuthBox = (props: AuthBoxProps) => {
  return (
    <Box className={classes['auth-box']}>
      <h1 className={classes['auth-box__heading']}>{props.title}</h1>
      {props.errorMsg && (
        <Alert severity="error" variant={'filled'} className={classes['auth-box__alert']}>
          {props.errorMsg}
        </Alert>
      )}
      {props.successMsg && (
        <Alert severity="success" variant={'filled'} className={classes['auth-box__alert']}>
          {props.successMsg}
        </Alert>
      )}
      {props.children}
    </Box>
  )
}

export default AuthBox
