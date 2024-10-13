import { REST_ROUTES } from '@/Router/RestRoutes'
import { useQuery } from '@tanstack/react-query'
import { API } from '@/Api/Axios'
import { Artist } from '@/Api/Model/Artist/Artist'

const fetchMostFollowedArtists = () => {
  const {
    isLoading,
    data: response,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ['most-followed-artists'],

    queryFn: () => {
      return API.get<Artist[]>(REST_ROUTES.mostFollowedArtists)
    },
  })

  return { artists: response?.data, isLoading, isSuccess, error }
}

export default fetchMostFollowedArtists
