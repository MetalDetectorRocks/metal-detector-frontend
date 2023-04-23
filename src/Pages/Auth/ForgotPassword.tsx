import ForgotPasswordForm from '../../Components/Auth/ForgotPassword/ForgotPasswordForm'
import { useEffect } from 'react'

export const ForgotPassword = () => {
  useEffect(() => {
    document.title = 'Forgot Password | Metal Detector'
  }, [])
  return (
    <>
      <ForgotPasswordForm />
    </>
  )
}
