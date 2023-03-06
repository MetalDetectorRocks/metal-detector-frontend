import useApiWithToken from './useApiWithToken'
import { useQuery } from 'react-query'
import { REST_ROUTES } from '../../Router/RestRoutes'
import { CurrentUserDetailsResponse } from '../../Api/Model/Auth/CurrentUserDetailsResponse'

const useFetchCurrentUserDetails = () => {
  const API = useApiWithToken()
  const {
    isLoading,
    data: response,
    error,
  } = useQuery('current-user-details', () => {
    return API.get<CurrentUserDetailsResponse>(REST_ROUTES.currentUser)
  })

  return { userDetails: response?.data, isLoading, error }
}

export default useFetchCurrentUserDetails
