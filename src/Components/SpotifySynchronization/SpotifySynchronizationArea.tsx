import useFetchAuthorizationState from '../../Hooks/SpotifySynchronization/useFetchAuthorizationState'
import LoadingSpinner from '../Common/LoadingSpinner'
import ErrorAlert from '../Common/ErrorAlert'
import React, { useEffect, useState } from 'react'
import useAuthorizeRegistrationId from '../../Hooks/SpotifySynchronization/useAuthorizeRegistrationId'

const SpotifySynchronizationArea = () => {
  const SPOTIFY_REGISTRATION_ID = 'spotify-user'
  const {
    authorizationExists,
    isLoading: isLoadingFetchState,
    error,
  } = useFetchAuthorizationState(SPOTIFY_REGISTRATION_ID)
  const {
    authorizeRegistrationId,
    isLoading: isLoadingAuthorization,
    errorMsg,
    isSuccess,
  } = useAuthorizeRegistrationId(SPOTIFY_REGISTRATION_ID)
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    if (authorizationExists?.exists) {
      setIsAuthorized(true)
    }
  }, [isAuthorized])

  const handleConnect = (event: React.SyntheticEvent) => {
    event.preventDefault()
    authorizeRegistrationId()
    if (isSuccess) {
      setIsAuthorized(true)
    }
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
