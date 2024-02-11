import useFetchAuthorizationState from '../../Hooks/SpotifySynchronization/useFetchAuthorizationState'
import LoadingSpinner from '../Common/LoadingSpinner'
import ErrorAlert from '../Common/ErrorAlert'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useAuthContext } from '../../Context/AuthContext'
import useDeleteAuthorization from '../../Hooks/SpotifySynchronization/useDeleteAuthorization'
import classes from './SpotifySynchronizationArea.module.css'
import { toast } from 'react-toastify'

const SpotifySynchronizationArea = () => {
  const OAUTH2_AUTHORIZATION_ENDPOINT = '/oauth2/authorization'
  const SPOTIFY_REGISTRATION_ID = 'spotify-user'
  const SPOTIFY_OAUTH_PATH = `${OAUTH2_AUTHORIZATION_ENDPOINT}/${SPOTIFY_REGISTRATION_ID}`
  const { fetchAuthorization, isLoading: isLoading, errorMsg } = useFetchAuthorizationState(SPOTIFY_REGISTRATION_ID)
  const { deleteAuthorization } = useDeleteAuthorization()
  const { ctx } = useAuthContext()
  const [, setCookie, removeCookie] = useCookies(['authorization'])
  const [linkText, setLinkText] = useState<string>('')
  const [connectionStatusText, setConnectionStatusText] = useState<string>('')
  const [exists, setExists] = useState<boolean>(false)
  const [reload, setReload] = useState<boolean>(false)

  useEffect(() => {
    fetchAuthorization()
      .then((response: boolean) => {
        setExists(response)
        if (response) {
          setConnectionStatusText('connected')
          setLinkText('Disconnect')
          removeCookie('authorization', {
            path: SPOTIFY_OAUTH_PATH,
            sameSite: 'strict',
          })
        } else {
          setConnectionStatusText('disconnected')
          setLinkText('Connect')
          setCookie('authorization', `${ctx?.accessToken}`, {
            path: SPOTIFY_OAUTH_PATH,
            sameSite: 'strict',
          })
        }
      })
      .catch(() => {
        toast.error(`Could not load authorization state, please try reloading the page.`)
      })
  }, [reload])

  const handleConnect = (event: React.SyntheticEvent) => {
    event.preventDefault()
    window.location.href = `${process.env.REACT_APP_BACKEND_URL as string}${SPOTIFY_OAUTH_PATH}`
  }

  const handleDisconnect = (event: React.SyntheticEvent) => {
    event.preventDefault()
    deleteAuthorization(SPOTIFY_REGISTRATION_ID)
      .then(() => {
        setReload(!reload)
      })
      .catch(() => {
        toast.error(`Could not delete authorization.`)
        setReload(!reload)
      })
  }

  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (exists) {
      handleDisconnect(event)
    } else {
      handleConnect(event)
    }
  }

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <>
      {errorMsg && <ErrorAlert message={errorMsg} />}
      <p>
        Connection status:{' '}
        <span className={exists ? classes['connected-text'] : classes['disconnected-text']}>
          {connectionStatusText}
        </span>{' '}
        (
        <span className={classes['link-text']} onClick={(event) => handleClick(event)}>
          {linkText}
        </span>
        )
      </p>
    </>
  )
}

export default SpotifySynchronizationArea
