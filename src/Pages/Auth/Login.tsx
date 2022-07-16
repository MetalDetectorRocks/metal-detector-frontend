import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import { useCookies } from 'react-cookie'
import { Navigate } from 'react-router-dom'
import { login } from '../../Router/RestRoutes'
import useAxios from 'axios-hooks'
import LoginForm from '../../Components/Login/LoginForm'
import { AxiosError } from 'axios'
import { ErrorResponse } from '../../Api/responseTypes'

export const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  const [cookie] = useCookies(['Authorization'])
  const [{ loading, error }, executePost] = useAxios(
    {
      url: login.path,
      method: 'POST',
    },
    { manual: true },
  )

  useEffect(() => {
    if (cookie.Authorization != null) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    executePost({ data: { username: username, password: password } })
      .then(() => {
        setIsLoggedIn(true)
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

  return isLoggedIn ? (
    <Navigate to={'/my-artists'} />
  ) : (
    <>
      <h1>Login</h1>
      <LoginForm
        handleSubmit={handleSubmit}
        handleUsernameValueChange={handleUsernameValueChange}
        handlePasswordValueChange={handlePasswordValueChange}
      ></LoginForm>
      {loading && <Typography>Loading...</Typography>}
      {error && <p>{error.response?.data.messages.join(' ')}</p>}
    </>
  )
}
