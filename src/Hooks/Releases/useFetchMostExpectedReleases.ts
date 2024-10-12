import { REST_ROUTES } from '@/Router/RestRoutes'
import { useQuery } from 'react-query'
import { API } from '@/Api/Axios'
import { Release } from '@/Api/Model/Release/Release'

const useFetchMostExpectedReleases = () => {
  const {
    isLoading,
    data: response,
    error,
    isSuccess,
  } = useQuery('most-expected-releases', () => {
    return API.get<Release[]>(REST_ROUTES.mostExpectedReleases)
  })

  return { releases: response?.data, isLoading, isSuccess, error }
}

export default useFetchMostExpectedReleases
