import { REST_ROUTES } from '@/Router/RestRoutes'
import { useQuery } from '@tanstack/react-query'
import { API } from '@/Api/Axios'
import { Release } from '@/Api/Model/Release/Release'

const useFetchMostExpectedReleases = () => {
  const {
    isLoading,
    data: response,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ['most-expected-releases'],

    queryFn: () => {
      return API.get<Release[]>(REST_ROUTES.mostExpectedReleases)
    },
  })

  return { releases: response?.data, isLoading, isSuccess, error }
}

export default useFetchMostExpectedReleases
