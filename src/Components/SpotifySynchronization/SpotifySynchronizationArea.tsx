import useFetchAuthorizationState from '../../Hooks/SpotifySynchronization/useFetchAuthorizationState'
import LoadingSpinner from '../Common/LoadingSpinner'
import ErrorAlert from '../Common/ErrorAlert'
import React, { useEffect, useState } from 'react'
import { REST_ROUTES } from '../../Router/RestRoutes'
import { useSearchParams } from 'react-router-dom'
import useAuthorizeRegistrationId from '../../Hooks/SpotifySynchronization/useAuthorizeRegistrationId'

const SpotifySynchronizationArea = () => {
  const SPOTIFY_REGISTRATION_ID = 'spotify-user'
  const {
    authorizationExists,
    isLoading: isLoadingFetchState,
    error,
  } = useFetchAuthorizationState(SPOTIFY_REGISTRATION_ID)
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [searchParams] = useSearchParams()
  const {
    authorizeRegistrationId,
    isLoading: isLoadingAuthorization,
    errorMsg,
    isSuccess,
  } = useAuthorizeRegistrationId()

  useEffect(() => {
    if (authorizationExists?.exists || isSuccess) {
      setIsAuthorized(true)
    }
    if (searchParams.get('code') && searchParams.get('state')) {
      console.log(searchParams.get('code'))
      authorizeRegistrationId({ code: searchParams.get('code')!!, state: searchParams.get('state')!! })
    }
  }, [isAuthorized])

  const handleConnect = (event: React.SyntheticEvent) => {
    event.preventDefault()
    window.location.href = `${process.env.REACT_APP_BACKEND_URL as string}${
      REST_ROUTES.oAuthAuthorization
    }/spotify-user`
  }

  return isLoadingFetchState || isLoadingAuthorization ? (
    <LoadingSpinner />
  ) : (
    <>
      {(error && <ErrorAlert />) || (errorMsg && <ErrorAlert message={errorMsg} />)}
      {isAuthorized && <p>Connection status: connected (Disconnect)</p>}
      {!isAuthorized && (
        <p>
          Connection status: disconnected (<span onClick={(event) => handleConnect(event)}>Connect</span>)
        </p>
      )}
    </>
  )
}

export default SpotifySynchronizationArea
