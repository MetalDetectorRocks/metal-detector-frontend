import Container from '@mui/material/Container'
import ReleaseList from '../Components/Releases/ReleaseList'
import ReleaseFilter from '../Components/Releases/ReleaseFilter'
import Box from '@mui/material/Box'
import { ChangeEvent, useState } from 'react'
import useAxios from 'axios-hooks'
import { ReleasesResponse } from '../Api/responseTypes'
import { releases } from '../Router/RestRoutes'
import LoadingSpinner from '../Components/Common/LoadingSpinner'
import { Typography } from '@mui/material'
import classes from '../Pages/Release.module.scss'

export const Releases = () => {
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('release_date')
  const [direction, setDirection] = useState('asc')
  const [releasesFilter, setReleasesFilter] = useState('all')
  const [page, setPage] = useState(1)
  const [{ data, loading, error }] = useAxios<ReleasesResponse>({
    url: releases.path,
    method: 'GET',
    params: { page, sort, direction, releasesFilter, query },
  })

  const handlePaginationChange = (event: ChangeEvent<unknown>, page: number) => {
    event.preventDefault()
    window.scrollTo(0, 0)
    setPage(page)
  }

  return (
    <Container maxWidth="lg">
      <h1>Releases</h1>
      {loading && <LoadingSpinner />}
      {error && <Typography>Ooops...</Typography>}
      {data?.items && data?.items?.length > 0 && (
        <Box className={classes['releases-box']}>
          <ReleaseList
            releases={data.items}
            handlePaginationChange={handlePaginationChange}
            pagination={data.pagination}
            showAnnouncementDate={sort == 'announcement_date'}
          />
          <ReleaseFilter
            sort={sort}
            handleQuerySubmit={setQuery}
            handleSortChange={setSort}
            handleDirectionChange={setDirection}
            handleArtistsFilterChange={setReleasesFilter}
          />
        </Box>
      )}
    </Container>
  )
}
