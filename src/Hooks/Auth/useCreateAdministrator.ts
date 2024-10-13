import { REST_ROUTES } from '@/Router/RestRoutes'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { ErrorResponse } from '@/Api/Model/Common/ErrorResponse'
import { UpdateEmailRequest } from '@/Api/Model/Auth/UpdateEmailRequest'
import useApiWithToken from './useApiWithToken'

const useCreateAdministrator = () => {
  const API = useApiWithToken()
  const mutation = useMutation({
    mutationFn: (request: UpdateEmailRequest) => {
      return API.post(REST_ROUTES.users, JSON.stringify(request))
    },
  })

  return {
    createAdministrator: mutation.mutate,
    errorMsg:
      (mutation.error as AxiosError<ErrorResponse>)?.response?.data?.messages[0] ||
      (mutation.error as AxiosError<ErrorResponse>)?.message,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
  }
}

export default useCreateAdministrator
