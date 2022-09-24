import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { Navigate } from 'react-router-dom'
import LoginForm from '../../Components/Auth/Login/LoginForm'

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
      <LoginForm setIsLoggedIn={setIsLoggedIn} />
    </>
  )
}
