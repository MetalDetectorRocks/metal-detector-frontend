import ReleaseList from '../Components/Releases/ReleaseList'
import ReleaseFilter from '../Components/Releases/ReleaseFilter'
import Box from '@mui/material/Box'
import { ChangeEvent, useEffect, useState } from 'react'
import LoadingSpinner from '../Components/Common/LoadingSpinner'
import classes from '../Pages/Release.module.scss'
import ErrorAlert from '../Components/Common/ErrorAlert'
import useFetchReleases from '../Hooks/useFetchReleases'

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
  const [dateFilterValue, setDateFilterValue] = useState('all')
  const { fetchReleases, error, isLoading, releasesResponse } = useFetchReleases()

  useEffect(() => {
    fetchReleases({
      page: page,
      sort: sort,
      direction: direction,
      releasesFilter: releasesFilter,
      query: query,
      dateFrom: date.dateFrom,
      dateTo: date.dateTo,
    })
  }, [query, sort, direction, releasesFilter, page, date])

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
      {isLoading && <LoadingSpinner />}
      {error && <ErrorAlert />}
      {releasesResponse?.data.items && (
        <Box className={classes['releases-box']}>
          <ReleaseList
            releases={releasesResponse?.data.items}
            handlePaginationChange={handlePaginationChange}
            pagination={releasesResponse.data.pagination}
            showAnnouncementDate={sort == 'announcement_date'}
          />
          <ReleaseFilter
            sort={sort}
            direction={direction}
            releasesFilter={releasesFilter}
            dateFilterValue={dateFilterValue}
            handleQuerySubmit={setQuery}
            handleSortChange={setSort}
            handleDirectionChange={setDirection}
            handleReleaseFilterChange={setReleasesFilter}
            handleDateChange={handleDateChange}
            setDateFilterValue={setDateFilterValue}
          />
        </Box>
      )}
    </>
  )
}
