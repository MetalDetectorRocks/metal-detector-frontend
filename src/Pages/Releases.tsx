import ReleaseList from '../Components/Releases/ReleaseList'
import ReleaseFilter from '../Components/Releases/ReleaseFilter'
import Box from '@mui/material/Box'
import { ChangeEvent, useState } from 'react'
import useAxios from 'axios-hooks'
import { ReleasesResponse } from '../Api/responseTypes'
import { REST_ROUTES } from '../Router/RestRoutes'
import LoadingSpinner from '../Components/Common/LoadingSpinner'
import classes from '../Pages/Release.module.scss'
import ErrorAlert from '../Components/Common/ErrorAlert'

export const Releases = () => {
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('release_date')
  const [direction, setDirection] = useState('asc')
  const [releasesFilter, setReleasesFilter] = useState('all')
  const [page, setPage] = useState(1)
  const [date, setDate] = useState({
    dateFrom: '',
    dateTo: '',
  })
  const [{ data, loading, error }] = useAxios<ReleasesResponse>({
    url: REST_ROUTES.releases,
    method: 'GET',
    params: { page, sort, direction, releasesFilter, query, dateFrom: date.dateFrom, dateTo: date.dateTo },
  })

  const handlePaginationChange = (event: ChangeEvent<unknown>, page: number) => {
    event.preventDefault()
    window.scrollTo(0, 0)
    setPage(page)
  }

  const handleDateChange = (dateFrom: string, dateTo: string) => {
    setDate({
      dateFrom: dateFrom,
      dateTo: dateTo,
    })
  }

  return (
    <>
      <h1>Releases</h1>
      {loading && <LoadingSpinner />}
      {error && <ErrorAlert />}
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
            handleDateChange={handleDateChange}
          />
        </Box>
      )}
    </>
  )
}
