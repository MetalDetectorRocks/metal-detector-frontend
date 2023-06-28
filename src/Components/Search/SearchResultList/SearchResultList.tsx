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
  const { searchArtists, isLoading } = useSearchArtists()

  // useReducer wäre hier auch nett, aber der sehr verschachtelte State kann hier schnell zum Problem werden,
  // besser atomare States oder useReducer, immer leichter zu debuggen und auch zu erweitern und verstehen
  const [query, setQuery] = useState<string>(searchParams.get('query') || '')
  const [page, setPage] = useState<number>(1)
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [results, setResults] = useState<ArtistSearchResultEntry[]>([])

  useEffect(() => {
    // wenn sich der "echte" searchQuery ändert soll die Liste zurückgesetzt werden
    setQuery(searchParams.get('query') || '')
    setResults([])
    setPage(1)
  }, [searchParams.get('query')])

  useEffect(() => {
    // bei dem setResults musst du nochmal schauen, da war vorher ein "concat", ich hab nicht verstanden wieso und es funktioniert noch wunderbar :D
    searchArtists(
      { query, page },
      {
        onSuccess: (resp) => {
          setResults((state) => [...state, ...resp.data.searchResults])
          setHasMore(resp.data.pagination.currentPage < resp.data.pagination.totalPages)
        },
      },
    )
  }, [query, page])

  const fetchMore = () => {
    // fetchMore wird eh nur getriggert, wenn hasMore true ist
    setPage((page) => page + 1)
  }

  const spinner = (
    <div className={classes['spinner-wrapper']}>
      <div>🎸</div>
      Loading some awesome riffs ..
    </div>
  )

  return (
    <>
      <Box className={classes['search-results']}>
        {results && (
          <>
            {!isLoading && <h1 className={classes['search-results__heading']}>{query}</h1>}
            <Box className={classes['search-results__list']}>
              <InfiniteScroll dataLength={results.length} next={fetchMore} hasMore={hasMore} loader={spinner}>
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
