import React, { useState } from 'react'
import { myArtists } from '../Router/RestRoutes'
import Container from '@mui/material/Container'
import DefaultPagination from '../Components/Pagination/DefaultPagination'
import ArtistGrid from '../Components/Grid/ArtistGrid'
import useAxios from 'axios-hooks'
import { Typography } from '@mui/material'

export const MyArtists = () => {
  const [page, setPage] = useState(1)
  const [{ data, loading, error }] = useAxios({ url: myArtists.path, method: 'GET', params: { page } })

  const handlePaginationChange = (event: React.ChangeEvent<unknown>, page: number) => {
    event.preventDefault()
    window.scrollTo(0, 0)
    setPage(page)
  }

  return (
    <Container maxWidth={'lg'}>
      <h1>MyArtists</h1>
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography>Ooops...</Typography>}
      <ArtistGrid artists={data?.myArtists || []} />
      <DefaultPagination
        totalPages={data?.pagination?.totalPages || 0}
        currentPage={data?.pagination?.currentPage || 0}
        onChange={handlePaginationChange}
      />
    </Container>
  )
}
