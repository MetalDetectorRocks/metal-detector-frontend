import { REST_ROUTES } from '@/Router/RestRoutes'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { ErrorResponse } from '@/Api/Model/Common/ErrorResponse'
import { UpdateEmailRequest } from '@/Api/Model/Auth/UpdateEmailRequest'
import useApiWithToken from './useApiWithToken'

const useUpdateEmailAddress = () => {
  const API = useApiWithToken()
  const mutation = useMutation({
    mutationFn: (request: UpdateEmailRequest) => {
      return API.patch(REST_ROUTES.updateEmailAddress, JSON.stringify(request))
    },
  })

  return {
    updateEmailAddress: mutation.mutate,
    errorMsg:
      (mutation.error as AxiosError<ErrorResponse>)?.response?.data?.messages[0] ||
      (mutation.error as AxiosError<ErrorResponse>)?.message,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
  }
}

export default useUpdateEmailAddress
