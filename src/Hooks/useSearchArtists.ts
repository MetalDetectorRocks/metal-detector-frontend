import { useQuery } from 'react-query'
import { REST_ROUTES } from '../Router/RestRoutes'
import { ArtistSearchResponse } from '../Api/Model/Artist/ArtistSearchResponse'
import { API } from '../Api/Axios'
import { AxiosError } from 'axios'
import { ErrorResponse } from '../Api/Model/Common/ErrorResponse'

export type SearchArtistsProps = {
  query: string
  page: number
}

const searchArtists = (props: SearchArtistsProps) => {
  const query = useQuery(
    'search-artists',
    () => {
      return API.get<ArtistSearchResponse>(REST_ROUTES.searchArtists, {
        params: {
          size: 10,
          ...props,
        },
      })
    },
    { enabled: false },
  )

  return {
    searchArtists: query.refetch,
    title: query.data?.data.searchResultsTitle,
    artists: query.data?.data.searchResults,
    pagination: query.data?.data.pagination,
    error: query.error as AxiosError<ErrorResponse>,
    isLoading: query.isLoading || query.isRefetching,
  }
}

export default searchArtists
