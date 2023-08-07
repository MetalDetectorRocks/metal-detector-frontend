import { Grid } from '@mui/material'
import ArtistCard from '../Card/ArtistCard'
import classes from './ArtistGrid.module.scss'
import React, { useState } from 'react'
import DefaultPagination from '../Pagination/DefaultPagination'
import LoadingSpinner from '../Common/LoadingSpinner'
import useFetchMyArtists from '../../Hooks/Artists/useFetchMyArtists'
import { Artist } from '../../Api/Model/Artist/Artist'
import ErrorAlert from '../Common/ErrorAlert'

const ArtistGrid = () => {
  const [page, setPage] = useState(1)
  const { artists, pagination, isLoading, error } = useFetchMyArtists({ page })

  const handlePaginationChange = (event: React.ChangeEvent<unknown>, page: number) => {
    event.preventDefault()
    window.scrollTo(0, 0)
    setPage(page)
  }

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <>
      {error && <ErrorAlert />}
      <Grid
        container
        className={classes['artistGrid']}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        direction={'row'}
        alignItems={'flex-start'}
        justifyContent={'flex-start'}
      >
        {artists?.map((artist: Artist) => (
          <Grid item xs={3} key={artist.source + artist.externalId}>
            <ArtistCard name={artist.artistName} followedSince={artist.followedSince} image={artist.mediumImage} />
          </Grid>
        ))}
      </Grid>
      <DefaultPagination
        totalPages={pagination?.totalPages || 0}
        currentPage={pagination?.currentPage || 0}
        onChange={handlePaginationChange}
      />
    </>
  )
}

export default ArtistGrid
