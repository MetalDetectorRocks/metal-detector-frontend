import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useSearchArtists from '../../../Hooks/Artists/useSearchArtists'
import Box from '@mui/material/Box'
import classes from './SearchResultList.module.scss'
import { ArtistSearchResultEntry } from '../../../Api/Model/Artist/ArtistSearchResultEntry'
import SearchResultItem from '../SearchResultItem/SearchResultItem'
import SearchResultListSkeleton from './SearchResultListSkeleton'
import InfiniteScroll from 'react-infinite-scroll-component'

const SearchResultList = () => {
  const [searchParams] = useSearchParams()
  const { searchArtists, isLoading } = useSearchArtists()
  const [query, setQuery] = useState<string>(searchParams.get('query') || '')
  const [page, setPage] = useState<number>(1)
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [title, setTitle] = useState<string>('')
  const [results, setResults] = useState<ArtistSearchResultEntry[]>([])

  useEffect(() => {
    setQuery(searchParams.get('query') || '')
    setResults([])
    setPage(1)
  }, [searchParams.get('query')])

  useEffect(() => {
    searchArtists(
      { query, page },
      {
        onSuccess: (response) => {
          setResults((state) => [...state, ...response.data.searchResults])
          setHasMore(response.data.pagination.currentPage < response.data.pagination.totalPages)
          setTitle(response.data.searchResultsTitle)
        },
      },
    )
  }, [query, page])

  const fetchMore = () => {
    setPage((page) => page + 1)
  }

  return (
    <>
      <Box className={classes['search-results']}>
        {results && (
          <>
            {!isLoading && <h1 className={classes['search-results__heading']}>{title}</h1>}
            <Box className={classes['search-results__list']}>
              <InfiniteScroll dataLength={results.length} next={fetchMore} hasMore={hasMore} loader={<></>}>
                {results.map((artist: ArtistSearchResultEntry, index) => (
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
