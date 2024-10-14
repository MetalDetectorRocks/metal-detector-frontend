import useApiWithToken from '../Auth/useApiWithToken'
import { MyArtistsResponse } from '@/Api/Model/Artist/MyArtistsResponse'
import { REST_ROUTES } from '@/Router/RestRoutes'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { ErrorResponse } from '@/Api/Model/Common/ErrorResponse'

export type FetchMyArtistsProps = {
  page: number
}

const useFetchMyArtists = (props: FetchMyArtistsProps) => {
  const API = useApiWithToken()
  const query = useQuery({
    queryKey: ['my-artists'],

    queryFn: () => {
      return API.get<MyArtistsResponse>(REST_ROUTES.myArtists, {
        params: {
          ...props,
        },
      })
    },
  })

  return {
    fetchArtists: query.refetch,
    artists: query.data?.data.myArtists,
    pagination: query.data?.data.pagination,
    isLoading: query.isLoading,
    error: query.error as AxiosError<ErrorResponse>,
  }
}

export default useFetchMyArtists
