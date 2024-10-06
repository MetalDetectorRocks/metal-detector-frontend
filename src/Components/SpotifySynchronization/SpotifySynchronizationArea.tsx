import useFetchAuthorizationState from '../../Hooks/SpotifySynchronization/useFetchAuthorizationState'
import LoadingSpinner from '../Common/LoadingSpinner'
import ErrorAlert from '../Common/ErrorAlert'
import React, { useEffect, useState } from 'react'
import useDeleteAuthorization from '../../Hooks/SpotifySynchronization/useDeleteAuthorization'
import classes from './SpotifySynchronizationArea.module.scss'
import { toast } from 'react-toastify'
import Button from '@mui/material/Button'
import useFetchSpotifyArtists from '../../Hooks/Artists/useFetchSpotifyArtists'
import CachedIcon from '@mui/icons-material/Cached'
import useSynchronizeArtists from '../../Hooks/SpotifySynchronization/useSynchronizeArtists'
import { SpotifyArtist } from '../../Api/Model/Artist/SpotifyArtist'
import { List, ListItem, Typography } from '@mui/material'

const SpotifySynchronizationArea = () => {
  const OAUTH2_AUTHORIZATION_ENDPOINT = '/oauth2/authorization'
  const SPOTIFY_REGISTRATION_ID = 'spotify-user'
  const SPOTIFY_OAUTH_PATH = `${OAUTH2_AUTHORIZATION_ENDPOINT}/${SPOTIFY_REGISTRATION_ID}`

  const {
    fetchAuthorization,
    isLoading: isLoadingFetchAuthorizationState,
    errorMessage: errorMessageFetchAuthorizationState,
  } = useFetchAuthorizationState(SPOTIFY_REGISTRATION_ID)
  const {
    synchronizeArtists,
    isLoading: isLoadingSynchronizeArtists,
    errorMessage: errorMsgSynchronizeArtists,
  } = useSynchronizeArtists()
  const {
    fetchSpotifyArtists,
    isLoading: isLoadingFetchSpotifyArtists,
    errorMessage: errorMsgFetchSpotifyArtists,
  } = useFetchSpotifyArtists()
  const { deleteAuthorization } = useDeleteAuthorization()
  const [linkText, setLinkText] = useState<string>('')
  const [connectionStatusText, setConnectionStatusText] = useState<string>('')
  const [exists, setExists] = useState<boolean>(false)
  const [reload, setReload] = useState<boolean>(false)
  const [artists, setArtists] = useState<SpotifyArtist[]>([])

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

  useEffect(() => {
    if (artists.length > 0) {
      handleSynchronizeSpotifyArtists()
    }
  }, [artists])

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

  const handleConnectDisconnectClick = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (exists) {
      handleDisconnect(event)
    } else {
      handleConnect(event)
    }
  }

  const doFetchSpotifyArtists = () => {
    fetchSpotifyArtists()
      .then((response) => {
        setArtists(response)
        if (response.length === 0) {
          toast.info('No new artists found.')
        }
      })
      .catch(() => {
        toast.error('Could not fetch artists from spotify, please try again.')
      })
  }

  const handleSynchronizeSpotifyArtists = () => {
    synchronizeArtists(artists)
      .then((artistNames) => {
        toast.info(createFollowedArtistsList(artistNames))
        setArtists((currentArtists) => currentArtists.filter((artist) => artists.indexOf(artist) === -1))
      })
      .catch(() => {
        toast.error('Could not synchronize artists, please try again.')
      })
  }

  const createFollowedArtistsList = (artistNames: string[]) => {
    return (
      <>
        {artistNames.length == 0 && <Typography> No new artists found.</Typography>}
        {artistNames.length > 0 && (
          <>
            <Typography>Synchronized {artistNames.length} new artists:</Typography>
            <List>
              {artistNames.slice(0, Math.min(artistNames.length, 10)).map((artist: string) => (
                <ListItem key={artist}>{artist}</ListItem>
              ))}
              {artistNames.length > 10 && (
                <ListItem key={'more'}>{`... and ${artistNames.length - 10} more.`}</ListItem>
              )}
            </List>
          </>
        )}
      </>
    )
  }

  return isLoadingFetchAuthorizationState ? (
    <LoadingSpinner />
  ) : (
    <div className={classes['sync-wrapper']}>
      {(isLoadingFetchSpotifyArtists || isLoadingSynchronizeArtists) && <LoadingSpinner />}
      {errorMessageFetchAuthorizationState && <ErrorAlert message={errorMessageFetchAuthorizationState} />}
      {errorMsgSynchronizeArtists && <ErrorAlert message={errorMsgSynchronizeArtists} />}
      {errorMsgFetchSpotifyArtists && <ErrorAlert message={errorMsgFetchSpotifyArtists} />}
      <p className={classes['sync-status-text']}>
        Status:{' '}
        <span className={exists ? classes['connected-text'] : classes['disconnected-text']}>
          {connectionStatusText}
        </span>{' '}
        (
        <span className={classes['link-text']} onClick={(event) => handleConnectDisconnectClick(event)}>
          {linkText}
        </span>
        )
      </p>
      {exists && (
        <div className={classes['button-area']}>
          <Button
            variant="outlined"
            color={'success'}
            onClick={() => doFetchSpotifyArtists()}
            className={classes['sync-artists-button']}
          >
            <CachedIcon color={'success'} fontSize={'small'} /> Synchronize
          </Button>
        </div>
      )}
    </div>
  )
}

export default SpotifySynchronizationArea
