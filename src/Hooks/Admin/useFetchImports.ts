import useApiWithToken from '../Auth/useApiWithToken'
import { REST_ROUTES } from '@/Router/RestRoutes'
import { AxiosError } from 'axios'
import { ErrorResponse } from '@/Api/Model/Common/ErrorResponse'
import { useQuery } from '@tanstack/react-query'
import { ImportDetails } from '@/Api/Model/Jobs/ImportDetails'

const useFetchImports = () => {
  const API = useApiWithToken()
  const {
    isLoading,
    data: response,
    error,
  } = useQuery(['imports'], () => {
    return API.get<ImportDetails[]>(REST_ROUTES.imports)
  })

  return {
    imports: response?.data,
    error: error as AxiosError<ErrorResponse>,
    isLoading: isLoading,
  }
}

export default useFetchImports
