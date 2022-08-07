import { Grid, Typography } from '@mui/material'
import ArtistCard from '../Card/ArtistCard'
import classes from './ArtistGrid.module.scss'
import React, { useState } from 'react'
import useAxios from 'axios-hooks'
import { myArtists } from '../../Router/RestRoutes'
import DefaultPagination from '../Pagination/DefaultPagination'
import { Artist, MyArtistsResponse } from '../../Api/responseTypes'

const ArtistGrid = () => {
  const [page, setPage] = useState(1)
  const [{ data, loading, error }] = useAxios<MyArtistsResponse>({
    url: myArtists.path,
    method: 'GET',
    params: { page },
  })

  const handlePaginationChange = (event: React.ChangeEvent<unknown>, page: number) => {
    event.preventDefault()
    window.scrollTo(0, 0)
    setPage(page)
  }

  return (
    <>
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography>Ooops...</Typography>}
      <Grid
        container
        className={classes['artistGrid']}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        direction={'row'}
        alignItems={'flex-start'}
        justifyContent={'flex-start'}
      >
        {data?.myArtists?.map((artist: Artist) => (
          <Grid item xs={3} key={data.myArtists?.indexOf(artist)}>
            <ArtistCard name={artist.artistName} followedSince={artist.followedSince} image={artist.mediumImage} />
          </Grid>
        ))}
      </Grid>
      <DefaultPagination
        totalPages={data?.pagination?.totalPages || 0}
        currentPage={data?.pagination?.currentPage || 0}
        onChange={handlePaginationChange}
      />
    </>
  )
}

export default ArtistGrid
