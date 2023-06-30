import { useMutation } from 'react-query'
import { REST_ROUTES } from '../Router/RestRoutes'
import { ArtistSearchResponse } from '../Api/Model/Artist/ArtistSearchResponse'
import { API } from '../Api/Axios'

export type SearchArtistsProps = {
  query: string
  page: number
}

const useSearchArtists = () => {
  const {
    mutate: searchArtists,
    isLoading,
    error,
  } = useMutation((props: SearchArtistsProps) => {
    return API.get<ArtistSearchResponse>(REST_ROUTES.searchArtists, {
      params: {
        size: 10,
        ...props,
      },
    })
  })

  return {
    searchArtists,
    error,
    isLoading,
  }
}

export default useSearchArtists
