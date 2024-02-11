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
  const { fetchAuthorization, isLoading: isLoading, errorMsg } = useFetchAuthorizationState(SPOTIFY_REGISTRATION_ID)
  const { deleteAuthorization } = useDeleteAuthorization()
  const { ctx } = useAuthContext()
  const [, setCookie, removeCookie] = useCookies(['authorization'])
  const [linkText, setLinkText] = useState<string>('')
  const [connectionStatusText, setConnectionStatusText] = useState<string>('')
  const [exists, setExists] = useState<boolean>(false)
  const [reload, setReload] = useState<boolean>(false)

  useEffect(() => {
    fetchAuthorization().then((response: boolean) => {
      setExists(response)
      if (response) {
        setConnectionStatusText('connected')
        setLinkText('Disconnect')
        removeCookie('authorization', {
          path: `${REST_ROUTES.oAuthAuthorization}/spotify-user`,
          sameSite: 'lax',
        })
      } else {
        setConnectionStatusText('disconnected')
        setLinkText('Connect')
        setCookie('authorization', `${ctx?.accessToken}`, {
          path: `${REST_ROUTES.oAuthAuthorization}/spotify-user`,
          sameSite: 'lax',
        })
      }
    })
  }, [reload])

  const handleConnect = (event: React.SyntheticEvent) => {
    event.preventDefault()
    window.location.href = `${process.env.REACT_APP_BACKEND_URL as string}${REST_ROUTES.oAuthAuthorization}/spotify-user`
  }

  const handleDisconnect = (event: React.SyntheticEvent) => {
    event.preventDefault()
    deleteAuthorization(SPOTIFY_REGISTRATION_ID).then(() => {
      setReload(!reload)
    })
  }

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <>
      {errorMsg && <ErrorAlert message={errorMsg} />}
      {exists && (
        <p>
          Connection status: {connectionStatusText} (
          <span onClick={(event) => handleDisconnect(event)}>{linkText}</span>)
        </p>
      )}
      {!exists && (
        <p>
          Connection status: {connectionStatusText} (<span onClick={(event) => handleConnect(event)}>{linkText}</span>)
        </p>
      )}
    </>
  )
}

export default SpotifySynchronizationArea
