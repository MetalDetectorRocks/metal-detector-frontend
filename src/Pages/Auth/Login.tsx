import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material'
import { AxiosError, AxiosResponse } from 'axios'
import { useCookies } from 'react-cookie'
import { Navigate } from 'react-router-dom'
import axios from '../../Config/axios.config'
import { LOGIN } from '../../Config/endpoints.config'

export interface LoginResponse {
  readonly username: string
  readonly token: string
  readonly roles: string[]
}

export interface ErrorResponse {
  readonly timestamp: Date
  readonly status: number
  readonly error: string
  readonly messages: string[]
}

export const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [cookie, setCookie] = useCookies(['Authorization'])

  useEffect(() => {
    if (cookie.Authorization != null) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    setErrorMessage('')

    await axios
      .post(LOGIN, {
        username: username,
        password: password,
      })
      .then((response: AxiosResponse<LoginResponse>) => {
        setCookie('Authorization', `Bearer ${response.data.token}`, {
          path: '/', // ToDo: this correct?
          maxAge: 300,
          domain: 'localhost', // ToDo: change later
          secure: false, // ToDo: change later
          // httpOnly: true, // ToDo: can only be set by server...
          sameSite: 'lax', // ToDo: this correct?
        })
        setIsLoggedIn(true)
      })
      .catch((error: AxiosError<ErrorResponse>) => {
        setErrorMessage(error.response?.data.messages.join(' ') as string)
      })
  }

  const handleUsernameValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePasswordValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const renderErrorMessage = () => {
    return <div>{errorMessage}</div>
  }

  return isLoggedIn ? (
    <Navigate to="/my-artists" />
  ) : (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit.bind(this)}>
        <TextField
          type="text"
          name="username"
          label="Username"
          onChange={handleUsernameValueChange.bind(this)}
          required
          autoFocus
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          onChange={handlePasswordValueChange.bind(this)}
          required
        />
        {renderErrorMessage()}
        <Button type="submit">Login</Button>
      </form>
    </>
  )
}
