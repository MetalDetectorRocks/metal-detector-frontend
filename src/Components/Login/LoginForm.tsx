import { Button, TextField } from '@mui/material'
import React from 'react'

export type LoginProps = {
  handleSubmit: (event: React.SyntheticEvent) => void
  handleUsernameValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handlePasswordValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const LoginForm = (props: LoginProps) => {
  return (
    <form onSubmit={props.handleSubmit.bind(this)}>
      <TextField
        type={'text'}
        name={'username'}
        label={'Username'}
        onChange={props.handleUsernameValueChange.bind(this)}
        required
        autoFocus
      />
      <TextField
        type={'password'}
        name={'password'}
        label={'Password'}
        onChange={props.handlePasswordValueChange.bind(this)}
        required
      />
      <Button type={'submit'}>Login</Button>
    </form>
  )
}

export default LoginForm
