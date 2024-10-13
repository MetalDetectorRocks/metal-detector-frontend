import useApiWithToken from './useApiWithToken'
import { useQuery } from '@tanstack/react-query'
import { REST_ROUTES } from '@/Router/RestRoutes'
import { CurrentUserDetailsResponse } from '@/Api/Model/Auth/CurrentUserDetailsResponse'

const useFetchCurrentUserDetails = () => {
  const API = useApiWithToken()
  const {
    isLoading,
    data: response,
    error,
  } = useQuery({
    queryKey: ['current-user-details'],

    queryFn: () => {
      return API.get<CurrentUserDetailsResponse>(REST_ROUTES.currentUser)
    }
  })

  return { userDetails: response?.data, isLoading, error }
}

export default useFetchCurrentUserDetails
