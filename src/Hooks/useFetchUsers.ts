import useApiWithToken from './Auth/useApiWithToken'
import { REST_ROUTES } from '../Router/RestRoutes'
import { AxiosError } from 'axios'
import { ErrorResponse } from '../Api/Model/Common/ErrorResponse'
import { useQuery } from 'react-query'
import { UserDetails } from '../Api/Model/User/UserDetails'

const useFetchUsers = () => {
  const API = useApiWithToken()
  const {
    isLoading,
    data: response,
    error,
  } = useQuery('users', () => {
    return API.get<UserDetails[]>(REST_ROUTES.users)
  })

  return {
    users: response?.data,
    error: error as AxiosError<ErrorResponse>,
    isLoading: isLoading,
  }
}

export default useFetchUsers
