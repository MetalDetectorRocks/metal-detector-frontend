import { useMutation } from '@tanstack/react-query'
import { REST_ROUTES } from '@/Router/RestRoutes'
import { ArtistSearchResponse } from '@/Api/Model/Artist/ArtistSearchResponse'
import { API } from '@/Api/Axios'
import useApiWithToken from '../Auth/useApiWithToken'
import useUser from '../Auth/useUser'

export type SearchArtistsProps = {
  query: string
  page: number
}

const useSearchArtists = () => {
  const { isAuthenticated } = useUser()
  const API_WITH_TOKEN = useApiWithToken()

  const {
    mutate: searchArtists,
    isPending,
    error,
  } = useMutation({
    mutationFn: (props: SearchArtistsProps) => {
      const api = isAuthenticated ? API_WITH_TOKEN : API
      return api.get<ArtistSearchResponse>(REST_ROUTES.searchArtists, {
        params: {
          size: 10,
          ...props,
        },
      })
    },
  })

  return {
    searchArtists,
    error,
    isLoading: isPending,
  }
}

export default useSearchArtists
