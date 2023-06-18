import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useSearchArtists from '../../../Hooks/useSearchArtists'
import Box from '@mui/material/Box'
import classes from './SearchResultList.module.scss'
import { ArtistSearchResultEntry } from '../../../Api/Model/Artist/ArtistSearchResultEntry'
import SearchResultItem from '../SearchResultItem/SearchResultItem'
import SearchResultListSkeleton from './SearchResultListSkeleton'
import InfiniteScroll from 'react-infinite-scroll-component'

type SearchResultListState = {
  query: string
  page: number
  items: ArtistSearchResultEntry[]
  hasMore: boolean
}

const SearchResultList = () => {
  const [searchParams] = useSearchParams()
  const [state, setState] = useState<SearchResultListState>({
    query: '',
    page: 0,
    items: [],
    hasMore: false,
  })
  const { isLoading, searchArtists, title, artists, pagination } = useSearchArtists({
    query: state.query,
    page: state.page,
  })

  useEffect(() => {
    setState((state) => ({ ...state, items: [], page: 1, query: searchParams.get('query') || '' }))
  }, [searchParams.get('query')])

  useEffect(() => {
    if (state.query || (state.query && state.page > 1)) {
      // noinspection JSIgnoredPromiseFromCall, is extracted from useSearchArtists hook
      searchArtists()
    }
  }, [state.query, state.page])

  useEffect(() => {
    if (pagination && artists) {
      setState((state) => ({
        ...state,
        page: pagination.currentPage,
        hasMore: pagination.currentPage < pagination.totalPages,
        items: state.items.concat(artists),
      }))
    }
  }, [artists])

  const fetchMore = () => {
    if (state.hasMore) {
      setState((state) => ({ ...state, page: state.page + 1 }))
    }
  }

  return (
    <>
      <Box className={classes['search-results']}>
        {state.items && (
          <>
            {!isLoading && <h1 className={classes['search-results__heading']}>{title}</h1>}
            <Box className={classes['search-results__list']}>
              <InfiniteScroll dataLength={state.items.length} next={fetchMore} hasMore={state.hasMore} loader={<></>}>
                {state.items.map((artist: ArtistSearchResultEntry, index) => (
                  <SearchResultItem key={index} artist={artist} />
                ))}
              </InfiniteScroll>
            </Box>
          </>
        )}
        {isLoading && <SearchResultListSkeleton firstPage={state.page === 1} />}
      </Box>
    </>
  )
}

export default SearchResultList
