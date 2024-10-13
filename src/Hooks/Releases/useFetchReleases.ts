import useApiWithToken from '../Auth/useApiWithToken'
import { REST_ROUTES } from '@/Router/RestRoutes'
import { ReleasesResponse } from '@/Api/Model/Release/ReleasesResponse'
import { AxiosError } from 'axios'
import { ErrorResponse } from '@/Api/Model/Common/ErrorResponse'
import { useQuery } from '@tanstack/react-query'

export type FetchReleasesProps = {
  page: number
  sort: string
  direction: string
  releasesFilter: string
  query: string
  dateFrom: string
  dateTo: string
}

const useFetchReleases = (props: FetchReleasesProps) => {
  const API = useApiWithToken()
  const query = useQuery({
    queryKey: ['releases'],

    queryFn: () => {
      return API.get<ReleasesResponse>(REST_ROUTES.releases, {
        params: {
          ...props,
        },
      })
    },

    enabled: false,
  })

  return {
    fetchReleases: query.refetch,
    releases: query.data?.data.items,
    pagination: query.data?.data.pagination,
    error: query.error as AxiosError<ErrorResponse>,
    isLoading: query.isLoading,
  }
}

export default useFetchReleases
