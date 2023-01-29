import useApiWithToken from './Auth/useApiWithToken'
import { REST_ROUTES } from '../Router/RestRoutes'
import { useMutation } from 'react-query'
import { ReleasesResponse } from '../Api/Model/Release/ReleasesResponse'
import { AxiosError } from 'axios'
import { ErrorResponse } from '../Api/Model/Common/ErrorResponse'

export type FetchReleasesProps = {
  page: number
  sort: string
  direction: string
  releasesFilter: string
  query: string
  dateFrom: string
  dateTo: string
}

const useFetchReleases = () => {
  const API = useApiWithToken()
  const mutation = useMutation({
    mutationFn: (props: FetchReleasesProps) => {
      return API.get<ReleasesResponse>(REST_ROUTES.releases, {
        params: {
          ...props,
        },
      })
    },
  })

  return {
    fetchReleases: mutation.mutate,
    releasesResponse: mutation.data,
    error: mutation.error as AxiosError<ErrorResponse>,
    isLoading: mutation.isLoading,
  }
}

export default useFetchReleases
