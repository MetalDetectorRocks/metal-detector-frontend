import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useSearchArtists from '../../../Hooks/useSearchArtists'
import Box from '@mui/material/Box'
import classes from './SearchResultList.module.scss'
import { ArtistSearchResultEntry } from '../../../Api/Model/Artist/ArtistSearchResultEntry'
import SearchResultItem from '../SearchResultItem/SearchResultItem'
import SearchResultListSkeleton from './SearchResultListSkeleton'
import InfiniteScroll from 'react-infinite-scroll-component'

const SearchResultList = () => {
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [title, setTitle] = useState('')
  const [items, setItems] = useState<ArtistSearchResultEntry[]>([])
  const [hasMore, setHasMore] = useState(false)
  const { isLoading, searchArtists, artists, pagination } = useSearchArtists({
    page,
    query,
  })

  useEffect(() => {
    console.log('init')
    setQuery(searchParams.get('query') || '')
  }, [searchParams.get('query')])

  useEffect(() => {
    if (page > 1) {
      console.log('Fetch more')
      // noinspection JSIgnoredPromiseFromCall, is extracted from useSearchArtists hook
      searchArtists()
    }
  }, [page])

  useEffect(() => {
    if (query) {
      console.log('Searching')
      setItems([])
      // noinspection JSIgnoredPromiseFromCall, is extracted from useSearchArtists hook
      searchArtists()
    }
  }, [query])

  useEffect(() => {
    if (pagination && artists) {
      console.log('Handle results')
      // TODO DanielW: Remove to backend
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
      // TODO DanielW: End

      setPage(pagination.currentPage)
      setHasMore(pagination.currentPage < pagination.totalPages)
      setItems(items.concat(artists))
    }
  }, [artists])

  const fetchMore = () => {
    if (hasMore) {
      setPage(page + 1)
    }
  }

  return (
    <>
      <Box className={classes['search-results']}>
        {items && (
          <>
            {!isLoading && <h1 className={classes['search-results__heading']}>{title}</h1>}
            <Box className={classes['search-results__list']}>
              <InfiniteScroll dataLength={items.length} next={fetchMore} hasMore={hasMore} loader={<></>}>
                {items.map((artist: ArtistSearchResultEntry, index) => (
                  <SearchResultItem key={index} artist={artist} />
                ))}
              </InfiniteScroll>
            </Box>
          </>
        )}
        {isLoading && <SearchResultListSkeleton firstPage={page === 1} />}
      </Box>
    </>
  )
}

export default SearchResultList
