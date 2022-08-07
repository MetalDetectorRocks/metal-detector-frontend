import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import useAxios from 'axios-hooks'
import { login } from '../../Router/RestRoutes'
import { AxiosError } from 'axios'
import { ErrorResponse } from '../../Api/responseTypes'

export type LoginProps = {
  setIsLoggedIn: (isLoggedIn: boolean) => void
}

const LoginForm = (props: LoginProps) => {
  const [username, setUsername] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  const [{ loading, error }, executePost] = useAxios<void>(
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
    <>
      {loading && <Typography>Loading...</Typography>}
      {error && <p>{error.response?.data.messages.join(' ')}</p>}
      <form onSubmit={handleSubmit.bind(this)}>
        <TextField
          type={'text'}
          name={'username'}
          label={'Username'}
          onChange={handleUsernameValueChange.bind(this)}
          required
          autoFocus
        />
        <TextField
          type={'password'}
          name={'password'}
          label={'Password'}
          onChange={handlePasswordValueChange.bind(this)}
          required
        />
        <Button type={'submit'}>Login</Button>
      </form>
    </>
  )
}

export default LoginForm
