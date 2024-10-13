import { useMutation } from 'react-query'
import { API } from '@/Api/Axios'
import { REST_ROUTES } from '@/Router/RestRoutes'
import { AxiosError } from 'axios'
import { ErrorResponse } from '@/Api/Model/Common/ErrorResponse'
import { ForgotPasswordRequest } from '@/Api/Model/Auth/ForgotPasswordRequest'

const useForgotPassword = () => {
  const mutation = useMutation({
    mutationFn: (request: ForgotPasswordRequest) => {
      return API.post(REST_ROUTES.forgotPassword, JSON.stringify(request))
    },
  })

  return {
    forgotPassword: mutation.mutate,
    errorMsg:
      (mutation.error as AxiosError<ErrorResponse>)?.response?.data?.messages[0] ||
      (mutation.error as AxiosError<ErrorResponse>)?.message,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
  }
}

export default useForgotPassword
