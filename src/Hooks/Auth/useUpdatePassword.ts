import { REST_ROUTES } from '@/Router/RestRoutes'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { ErrorResponse } from '@/Api/Model/Common/ErrorResponse'
import { UpdatePasswordRequest } from '@/Api/Model/Auth/UpdatePasswordRequest'
import useApiWithToken from './useApiWithToken'

const useUpdatePassword = () => {
  const API = useApiWithToken()
  const mutation = useMutation({
    mutationFn: (request: UpdatePasswordRequest) => {
      return API.patch(REST_ROUTES.updatePassword, JSON.stringify(request))
    },
  })

  return {
    updatePassword: mutation.mutate,
    errorMsg:
      (mutation.error as AxiosError<ErrorResponse>)?.response?.data?.messages[0] ||
      (mutation.error as AxiosError<ErrorResponse>)?.message,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
  }
}

export default useUpdatePassword
