import useFetchAuthorizationState from '../../Hooks/SpotifySynchronization/useFetchAuthorizationState'
import LoadingSpinner from '../Common/LoadingSpinner'
import ErrorAlert from '../Common/ErrorAlert'
import React, { ChangeEvent, ReactNode, useEffect, useState } from 'react'
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
import DataTableSearch from '../Common/Table/DataTableSearch'
import { Alignment } from 'react-data-table-component'

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
  const [artists, setArtists] = useState<SpotifyArtist[]>([])
  const [selectedArtists, setSelectedArtists] = useState<SpotifyArtist[]>([])
  const { fetchSpotifyArtists, isLoading: isLoadingFetchArtists, error: errorFetchArtists } = useFetchSpotifyArtists()
  const [searchText, setSearchText] = useState('')
  const [filteredArtists, setFilteredArtists] = useState<SpotifyArtist[]>([])

  useEffect(() => {
    if (artists) {
      setFilteredArtists(
        artists.filter(
          (artist: SpotifyArtist) =>
            (artist.name && artist.name.toLowerCase().includes(searchText.toLowerCase())) ||
            (artist.genres && artist.genres.find((genre) => genre.toLowerCase().includes(searchText.toLowerCase()))),
        ),
      )
    }
  }, [artists, searchText])

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

  const subHeaderComponent = (
    <DataTableSearch
      searchText={searchText}
      searchPlaceholder={'artist'}
      onSearch={(event: ChangeEvent<HTMLInputElement>) => setSearchText(event.target.value)}
    />
  )

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
    synchronizeArtists(selectedArtists)
      .then((artistsCount) => {
        toast.info(`Synchronized ${artistsCount} artists.`)
        setArtists((currentArtists) => currentArtists.filter((artist) => selectedArtists.indexOf(artist) === -1))
      })
      .catch(() => {
        toast.error('Could not synchronize artists, please try again.')
      })
  }

  return isLoadingFetchAuthorizationState || isLoadingSynchronizeArtists ? (
    <LoadingSpinner />
  ) : (
    <div className={classes['sync-wrapper']}>
      {errorMessageFetchAuthorizationState && <ErrorAlert message={errorMessageFetchAuthorizationState} />}
      {errorMsgSynchronizeArtists && <ErrorAlert message={errorMsgSynchronizeArtists} />}
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
      )}
      <>
        {isLoadingFetchArtists && <LoadingSpinner />}
        {errorFetchArtists && <ErrorAlert />}
        {artists.length > 0 && (
          <DataTable
            columns={columns}
            data={filteredArtists}
            defaultSortFieldId={2}
            defaultSortAsc={true}
            subHeader
            subHeaderAlign={Alignment.LEFT}
            subHeaderComponent={subHeaderComponent}
            selectableRows
            selectableRowsHighlight
            selectableRowsComponent={Switch as unknown as 'input' | ReactNode} // ToDo NilsD just Switch should be enough but does not work
            selectableRowsComponentProps={{ color: 'info', className: classes['sync-artist-switch'] }}
            onSelectedRowsChange={(rows) => setSelectedArtists(rows.selectedRows)}
          />
        )}
      </>
    </div>
  )
}

export default SpotifySynchronizationArea
