import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material'
import { AxiosError } from 'axios'
import { useCookies } from 'react-cookie'
import { Navigate } from 'react-router-dom'
import axios from '../../Config/axios.config'
import { login } from '../../Router/RestRoutes'

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
  const [cookie] = useCookies(['Authorization'])

  useEffect(() => {
    if (cookie.Authorization != null) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    setErrorMessage('')

    await axios
      .post(login.path, {
        username: username,
        password: password,
      })
      .then(() => {
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
        {errorMessage != '' && <p>{errorMessage}</p>}
        <Button type="submit">Login</Button>
      </form>
    </>
  )
}
