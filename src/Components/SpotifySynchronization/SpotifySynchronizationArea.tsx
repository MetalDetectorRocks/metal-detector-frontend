import useFetchAuthorizationState from '../../Hooks/SpotifySynchronization/useFetchAuthorizationState'
import LoadingSpinner from '../Common/LoadingSpinner'
import ErrorAlert from '../Common/ErrorAlert'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { REST_ROUTES } from '../../Router/RestRoutes'
import { useAuthContext } from '../../Context/AuthContext'
import useDeleteAuthorization from '../../Hooks/SpotifySynchronization/useDeleteAuthorization'

const SpotifySynchronizationArea = () => {
  const SPOTIFY_REGISTRATION_ID = 'spotify-user'
  const { authorizationExists, isLoading: isLoading, error } = useFetchAuthorizationState(SPOTIFY_REGISTRATION_ID)
  const { deleteAuthorization } = useDeleteAuthorization()
  const { ctx } = useAuthContext()
  const [, setCookie, removeCookie] = useCookies(['authorization'])
  const [linkText, setLinkText] = useState<string>('')
  const [connectionStatusText, setConnectionStatusText] = useState<string>('')

  useEffect(() => {
    if (authorizationExists && !authorizationExists.exists) {
      setConnectionStatusText('disconnected')
      setLinkText('Connect')
      setCookie('authorization', `${ctx?.accessToken}`, {
        path: `${REST_ROUTES.oAuthAuthorization}/spotify-user`,
        sameSite: 'lax',
      })
    } else if (authorizationExists && authorizationExists.exists) {
      setConnectionStatusText('connected')
      setLinkText('Disconnect')
      removeCookie('authorization', {
        path: `${REST_ROUTES.oAuthAuthorization}/spotify-user`,
        sameSite: 'lax',
      })
    }
  }, [authorizationExists])

  const handleConnect = (event: React.SyntheticEvent) => {
    event.preventDefault()
    window.location.href = `${process.env.REACT_APP_BACKEND_URL as string}${REST_ROUTES.oAuthAuthorization}/spotify-user`
  }

  const handleDisconnect = (event: React.SyntheticEvent) => {
    event.preventDefault()
    deleteAuthorization(SPOTIFY_REGISTRATION_ID)
    setConnectionStatusText('disconnected')
    setLinkText('Connect')
  }

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <>
      {error && <ErrorAlert />}
      {authorizationExists && authorizationExists.exists && (
        <p>
          Connection status: {connectionStatusText} (
          <span onClick={(event) => handleDisconnect(event)}>{linkText}</span>)
        </p>
      )}
      {(!authorizationExists || !authorizationExists.exists) && (
        <p>
          Connection status: {connectionStatusText} (<span onClick={(event) => handleConnect(event)}>{linkText}</span>)
        </p>
      )}
    </>
  )
}

export default SpotifySynchronizationArea
