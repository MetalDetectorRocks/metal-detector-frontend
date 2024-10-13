import { SignUpRequest } from '@/Api/Model/Auth/SignUpRequest'
import { API } from '@/Api/Axios'
import { REST_ROUTES } from '@/Router/RestRoutes'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { ErrorResponse } from '@/Api/Model/Common/ErrorResponse'

const useSignUp = () => {
  const mutation = useMutation({
    mutationFn: (request: SignUpRequest) => {
      return API.post(REST_ROUTES.signUp, JSON.stringify(request))
    },
  })

  return {
    signUp: mutation.mutate,
    errorMsg:
      (mutation.error as AxiosError<ErrorResponse>)?.response?.data?.messages[0] ||
      (mutation.error as AxiosError<ErrorResponse>)?.message,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
  }
}

export default useSignUp
