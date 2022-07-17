import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { Navigate } from 'react-router-dom'
import LoginForm from '../../Components/Login/LoginForm'

export const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [cookie] = useCookies(['Authorization'])

  useEffect(() => {
    if (cookie.Authorization != null) {
      setIsLoggedIn(true)
    }
  }, [])

  return isLoggedIn ? (
    <Navigate to={'/my-artists'} />
  ) : (
    <>
      <h1>Login</h1>
      <LoginForm setIsLoggedIn={setIsLoggedIn} />
    </>
  )
}
