import useFetchAuthorizationState from '../../Hooks/SpotifySynchronization/useFetchAuthorizationState'
import LoadingSpinner from '../Common/LoadingSpinner'
import ErrorAlert from '../Common/ErrorAlert'
import React, { ReactNode, useEffect, useState } from 'react'
import useDeleteAuthorization from '../../Hooks/SpotifySynchronization/useDeleteAuthorization'
import classes from './SpotifySynchronizationArea.module.scss'
import { toast } from 'react-toastify'
import Button from '@mui/material/Button'
import useFetchSpotifyArtists from '../../Hooks/Artists/useFetchSpotifyArtists'
import DataTable from '../Common/Table/DataTable'
import { columns } from './SpotifySynchronizationTableColumns'
import CachedIcon from '@mui/icons-material/Cached'
import { Switch } from '@mui/material'
import useSynchronizeArtists from '../../Hooks/SpotifySynchronization/useSynchronizeArtists'
import { SpotifyArtist } from '../../Api/Model/Artist/SpotifyArtist'

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
  const { deleteAuthorization } = useDeleteAuthorization()
  const [linkText, setLinkText] = useState<string>('')
  const [connectionStatusText, setConnectionStatusText] = useState<string>('')
  const [exists, setExists] = useState<boolean>(false)
  const [reload, setReload] = useState<boolean>(false)
  const [selectedArtists, setSelectedArtists] = useState<string[]>([])
  const {
    artists,
    fetchSpotifyArtists,
    isLoading: isLoadingFetchArtists,
    error: errorFetchArtists,
  } = useFetchSpotifyArtists()

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

  const handleConnectDisconnectClick = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (exists) {
      handleDisconnect(event)
    } else {
      handleConnect(event)
    }
  }

  const handleFetchSpotifyArtists = () => {
    fetchSpotifyArtists()
  }

  const handleSynchronizeSpotifyArtists = () => {
    synchronizeArtists(selectedArtists)
      .then((artistsCount) => {
        toast.info(`Synchronized ${artistsCount} artists.`)
      })
      .catch(() => {
        toast.error('Could not synchronize artists, please try again.')
      })
  }

  const handleRowSelected = (rows: SpotifyArtist[]) => {
    const selectedArtists = rows.map((row) => row.id)
    setSelectedArtists(selectedArtists)
  }

  return isLoadingFetchAuthorizationState || isLoadingSynchronizeArtists ? (
    <LoadingSpinner />
  ) : (
    <>
      {errorMessageFetchAuthorizationState && <ErrorAlert message={errorMessageFetchAuthorizationState} />}
      {errorMsgSynchronizeArtists && <ErrorAlert message={errorMsgSynchronizeArtists} />}
      <p>
        Connection status:{' '}
        <span className={exists ? classes['connected-text'] : classes['disconnected-text']}>
          {connectionStatusText}
        </span>{' '}
        (
        <span className={classes['link-text']} onClick={(event) => handleConnectDisconnectClick(event)}>
          {linkText}
        </span>
        )
      </p>
      <div className={classes['button-area']}>
        <Button variant="outlined" color={'success'} onClick={() => handleFetchSpotifyArtists()}>
          Fetch
        </Button>
        <Button
          variant="outlined"
          color={'success'}
          onClick={() => handleSynchronizeSpotifyArtists()}
          className={classes['sync-artists-button']}
        >
          <CachedIcon color={'success'} fontSize={'small'} /> Synchronize
        </Button>
      </div>
      <>
        {isLoadingFetchArtists && <LoadingSpinner />}
        {errorFetchArtists && <ErrorAlert />}
        {artists.length > 0 && (
          <DataTable
            columns={columns}
            data={artists}
            defaultSortFieldId={2}
            defaultSortAsc={false}
            noTableHead
            subHeader
            paginationServerOptions={{ persistSelectedOnSort: true, persistSelectedOnPageChange: true }}
            selectableRows
            selectableRowsHighlight
            selectableRowsComponent={Switch as unknown as 'input' | ReactNode}
            selectableRowsComponentProps={{ color: 'info', className: classes['sync-artist-switch'] }}
            onSelectedRowsChange={(rows) => handleRowSelected(rows.selectedRows)}
          />
        )}
      </>
    </>
  )
}

export default SpotifySynchronizationArea
