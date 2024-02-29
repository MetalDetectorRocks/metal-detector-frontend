import useFetchAuthorizationState from '../../Hooks/SpotifySynchronization/useFetchAuthorizationState'
import LoadingSpinner from '../Common/LoadingSpinner'
import ErrorAlert from '../Common/ErrorAlert'
import React, { useEffect, useState } from 'react'
import useDeleteAuthorization from '../../Hooks/SpotifySynchronization/useDeleteAuthorization'
import classes from './SpotifySynchronizationArea.module.scss'
import { toast } from 'react-toastify'
import Button from '@mui/material/Button'
import useFetchSpotifyArtists from '../../Hooks/Artists/useFetchSpotifyArtists'
import DataTable from '../Common/Table/DataTable'
import { columns } from './SpotifySynchronizationTableColumns'
import CachedIcon from '@mui/icons-material/Cached'

const SpotifySynchronizationArea = () => {
  const OAUTH2_AUTHORIZATION_ENDPOINT = '/oauth2/authorization'
  const SPOTIFY_REGISTRATION_ID = 'spotify-user'
  const SPOTIFY_OAUTH_PATH = `${OAUTH2_AUTHORIZATION_ENDPOINT}/${SPOTIFY_REGISTRATION_ID}`

  const { fetchAuthorization, isLoading: isLoading, errorMsg } = useFetchAuthorizationState(SPOTIFY_REGISTRATION_ID)
  const { deleteAuthorization } = useDeleteAuthorization()
  const [linkText, setLinkText] = useState<string>('')
  const [connectionStatusText, setConnectionStatusText] = useState<string>('')
  const [exists, setExists] = useState<boolean>(false)
  const [reload, setReload] = useState<boolean>(false)
  const { artists, fetchSpotifyArtists, isLoadingFetchArtists, errorFetchArtists } = useFetchSpotifyArtists()

  useEffect(() => {
    fetchAuthorization()
      .then((response: boolean) => {
        setExists(response)
        if (response) {
          setConnectionStatusText('connected')
          setLinkText('Disconnect')
        } else {
          setConnectionStatusText('disconnected')
          setLinkText('Connect')
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

  const handleFetch = () => {
    fetchSpotifyArtists()
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
      <div className={classes['button-area']}>
        <Button variant="outlined" color={'success'} onClick={() => handleFetch()}>
          Fetch
        </Button>
        <Button variant="outlined" color={'success'} className={classes['sync-button']}>
          <CachedIcon color={'success'} fontSize={'small'} /> Synchronize
        </Button>
      </div>
      <>
        {isLoadingFetchArtists && <LoadingSpinner />}
        {errorFetchArtists && <ErrorAlert />}
        {artists !== undefined && artists.length > 0 && (
          <DataTable
            columns={columns}
            data={artists ?? []}
            defaultSortFieldId={2}
            defaultSortAsc={false}
            noTableHead={true}
            paginationServerOptions={{ persistSelectedOnSort: true, persistSelectedOnPageChange: true }}
            subHeader
          />
        )}
      </>
    </>
  )
}

export default SpotifySynchronizationArea
