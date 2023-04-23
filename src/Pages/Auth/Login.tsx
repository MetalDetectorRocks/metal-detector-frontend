import SignInForm from '../../Components/Auth/SignIn/SignInForm'
import { useEffect } from 'react'

export const Login = () => {
  useEffect(() => {
    document.title = 'Sign In | Metal Detector'
  }, [])
  return (
    <>
      <SignInForm />
    </>
  )
}
