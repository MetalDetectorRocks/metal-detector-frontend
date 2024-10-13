import useApiWithToken from '../Auth/useApiWithToken'
import { MyArtistsResponse } from '@/Api/Model/Artist/MyArtistsResponse'
import { REST_ROUTES } from '@/Router/RestRoutes'
import { useQuery } from '@tanstack/react-query'

export type FetchMyArtistsProps = {
  page: number
}

const useFetchMyArtists = (props: FetchMyArtistsProps) => {
  const API = useApiWithToken()
  const {
    isLoading,
    data: response,
    error,
  } = useQuery({
    queryKey: ['my-artists'],

    queryFn: () => {
      return API.get<MyArtistsResponse>(REST_ROUTES.myArtists, {
        params: {
          ...props,
        },
      })
    }
  })

  return { artists: response?.data.myArtists, pagination: response?.data.pagination, isLoading, error }
}

export default useFetchMyArtists
