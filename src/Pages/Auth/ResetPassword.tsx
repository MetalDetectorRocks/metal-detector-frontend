import ResetPasswordForm from '../../Components/Auth/ResetPassword/ResetPasswordForm'
import { useEffect } from 'react'

export const ResetPassword = () => {
  useEffect(() => {
    document.title = 'Reset Password | Metal Detector'
  }, [])
  return (
    <>
      <ResetPasswordForm />
    </>
  )
}
