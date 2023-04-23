import SignUpForm from '../../Components/Auth/SignUp/SignUpForm'
import { useEffect } from 'react'

export const Register = () => {
  useEffect(() => {
    document.title = 'Sign Up | Metal Detector'
  }, [])
  return (
    <>
      <SignUpForm />
    </>
  )
}
