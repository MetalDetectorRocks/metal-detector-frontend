import GoogleIcon from '@mui/icons-material/Google'
import { Button, FormGroup } from '@mui/material'
import React from 'react'
import { MISC_BACKEND_ROUTES } from '@/Router/MiscBackendRoutes'

const GoogleLogin = () => {
  const GOOGLE_REGISTRATION_ID = 'google'
  const GOOGLE_OAUTH_PATH = `${MISC_BACKEND_ROUTES.oAuthAuthorization}/${GOOGLE_REGISTRATION_ID}`

  const handleGoogleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    window.location.href = `${import.meta.env.VITE_BACKEND_URL as string}${GOOGLE_OAUTH_PATH}`
  }

  return (
    <FormGroup>
      <Button
        variant={'outlined'}
        onClick={(event) => handleGoogleLogin(event)}
        type={'button'}
        size={'large'}
        startIcon={<GoogleIcon color={'secondary'} />}
      >
        Sign in with Google
      </Button>
    </FormGroup>
  )
}
export default GoogleLogin
