import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useSearchArtists from '../../../Hooks/useSearchArtists'
import { Skeleton, Stack } from '@mui/material'
import Box from '@mui/material/Box'
import classes from './SearchResultList.module.scss'
import { ArtistSearchResultEntry } from '../../../Api/Model/Artist/ArtistSearchResultEntry'
import SearchResultItem from '../SearchResultItem/SearchResultItem'
// import DefaultPagination from '../../Pagination/DefaultPagination'

const SearchResultList = () => {
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [title, setTitle] = useState('')
  const { isLoading, searchArtists, artists, pagination } = useSearchArtists({
    page,
    query,
  })

  useEffect(() => {
    setQuery(searchParams.get('query') || '')
    setPage(parseInt(searchParams.get('page') || '1') || 1)
  }, [searchParams.get('query'), searchParams.get('page')])

  useEffect(() => {
    if (query) {
      // noinspection JSIgnoredPromiseFromCall, is extracted from useSearchArtists hook
      searchArtists()
    }
  }, [query, page])

  useEffect(() => {
    if (pagination && artists) {
      const totalPages = pagination.totalPages
      const itemsPerPage = pagination.itemsPerPage

      if (totalPages === 1) {
        const amount = artists.length
        const resultWord = amount === 1 ? 'result' : 'results'
        setTitle(`${amount} ${resultWord} for "${query}"`)
      } else {
        const estimatedAmountOfResults = (totalPages - 1) * itemsPerPage
        setTitle(`More than ${estimatedAmountOfResults} results for "${query}"`)
      }
    }
  }, [artists])

  // const handlePaginationChange = (event: ChangeEvent<unknown>, page: number) => {
  //   event.preventDefault()
  //   window.scrollTo(0, 0)
  //   setPage(page)
  // }

  return (
    <>
      <Box className={classes['search-results']}>
        {!isLoading && artists && (
          <>
            <h1 className={classes['search-results__heading']}>{title}</h1>
            <Box className={classes['search-results__list']}>
              {artists.map((artist: ArtistSearchResultEntry) => (
                <SearchResultItem key={artist.id} artist={artist} />
              ))}
            </Box>
          </>
        )}
        {isLoading && (
          <Stack spacing={3}>
            <Skeleton variant="rounded" className={classes['search-results__skeleton-title']} />
            <Skeleton variant="rounded" className={classes['search-results__skeleton-item']} />
            <Skeleton variant="rounded" className={classes['search-results__skeleton-item']} />
            <Skeleton variant="rounded" className={classes['search-results__skeleton-item']} />
            <Skeleton variant="rounded" className={classes['search-results__skeleton-item']} />
            <Skeleton variant="rounded" className={classes['search-results__skeleton-item']} />
            <Skeleton variant="rounded" className={classes['search-results__skeleton-item']} />
            <Skeleton variant="rounded" className={classes['search-results__skeleton-item']} />
            <Skeleton variant="rounded" className={classes['search-results__skeleton-item']} />
          </Stack>
        )}
      </Box>
      {/*<DefaultPagination*/}
      {/*  currentPage={pagination?.currentPage || 0}*/}
      {/*  totalPages={pagination?.totalPages || 0}*/}
      {/*  onChange={handlePaginationChange}*/}
      {/*></DefaultPagination>*/}
    </>
  )
}

export default SearchResultList
