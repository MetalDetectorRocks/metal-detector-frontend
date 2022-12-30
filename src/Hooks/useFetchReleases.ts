import useApiWithToken from './Auth/useApiWithToken'
import { REST_ROUTES } from '../Router/RestRoutes'
import { useQuery } from 'react-query'
import { ReleasesResponse } from '../Api/Model/Release/ReleasesResponse'

export type FetchReleasesProps = {
  page: number
  sort: string
  direction: string
  releasesFilter: string
  query: string
  dateFrom: string
  dateTo: string
}

const fetchReleases = (props: FetchReleasesProps) => {
  const API = useApiWithToken()
  const {
    isLoading,
    data: response,
    error,
  } = useQuery('releases', () => {
    return API.get<ReleasesResponse>(REST_ROUTES.releases, {
      params: {
        ...props,
      },
    })
  })

  return { releases: response?.data.items, pagination: response?.data.pagination, isLoading, error }
}

export default fetchReleases
