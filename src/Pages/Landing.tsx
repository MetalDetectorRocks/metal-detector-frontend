import { useSearchParams } from 'react-router-dom'
import SuccessSnackbar from '../Components/Common/SuccessSnackbar'
import { useEffect } from 'react'

export const LandingPage = () => {
  const [searchParams] = useSearchParams()

  useEffect(() => {
    // TODO DanielW: open snack when user is navigated back to landing page
    console.log(Array.from(searchParams.keys()))
    console.log(`isLogout: ` + Array.from(searchParams.keys()).includes('logout'))
  }, [])

  return (
    <>
      <h1>Landing Page</h1>
      <SuccessSnackbar
        open={Array.from(searchParams.keys()).includes('logout')}
        message={'You have been successfully signed out!'}
      />
    </>
  )
}
