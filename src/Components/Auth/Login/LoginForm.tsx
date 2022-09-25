import { Button, FormGroup, TextField } from '@mui/material'
import React, { useState } from 'react'
import useAxios from 'axios-hooks'
import { login } from '../../../Router/RestRoutes'
import { AxiosError } from 'axios'
import { ErrorResponse } from '../../../Api/responseTypes'
import AuthBox from '../AuthBox'
import Box from '@mui/material/Box'
import classes from './LoginForm.module.scss'
import { forgotPassword, register } from '../../../Router/InternalRoutes'
import { NavLink } from 'react-router-dom'
import OrDivider from './OrDivider'
import GoogleLogin from './GoogleLogin'

export type LoginProps = {
  setIsLoggedIn: (isLoggedIn: boolean) => void
}

const LoginForm = (props: LoginProps) => {
  const [username, setUsername] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  const [{ error }, executePost] = useAxios<void>(
    {
      url: login.path,
      method: 'POST',
    },
    { manual: true },
  )

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    executePost({ data: { username: username, password: password } })
      .then(() => {
        props.setIsLoggedIn(true)
      })
      .catch((error: AxiosError<ErrorResponse>) => {
        console.log(error.response?.data)
      })
  }

  const handleUsernameValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePasswordValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  return (
    <AuthBox title={'Sign in'}>
      {error && <p>{error.response?.data.messages.join(' ')}</p>}
      <Box component={'form'}>
        <FormGroup className={classes['form']}>
          <TextField
            type={'text'}
            name={'username'}
            label={'Username or email address'}
            variant={'outlined'}
            color={'secondary'}
            autoComplete={'username'}
            onChange={handleUsernameValueChange.bind(this)}
            required
            autoFocus
          />
          <TextField
            type={'password'}
            name={'password'}
            label={'Password'}
            variant={'outlined'}
            color={'secondary'}
            autoComplete={'current-password'}
            onChange={handlePasswordValueChange.bind(this)}
            required
          />
          <Button variant={'outlined'} type={'button'} size={'large'} onClick={handleSubmit.bind(this)}>
            Sign in
          </Button>
        </FormGroup>
        <OrDivider />
        <GoogleLogin />
        <Box component={'div'} className={classes['form__footer']}>
          <p>
            New user? <NavLink to={register.path}>Join now!</NavLink>
          </p>
          <p>
            <NavLink to={forgotPassword.path}>{forgotPassword.name}?</NavLink>
          </p>
        </Box>
      </Box>
    </AuthBox>
  )
}

export default LoginForm
