import { SignUpRequest } from '../../Api/Model/Auth/SignUpRequest'
import { API } from '../../Api/Axios'
import { REST_ROUTES } from '../../Router/RestRoutes'
import { useMutation } from 'react-query'
import { AxiosError } from 'axios'
import { ErrorResponse } from '../../Api/Model/Common/ErrorResponse'

const useSignUp = () => {
  const mutation = useMutation({
    mutationFn: (request: SignUpRequest) => {
      return API.post(REST_ROUTES.signUp, JSON.stringify(request))
    },
  })

  return {
    signUp: mutation.mutate,
    error: mutation.error as AxiosError<ErrorResponse>,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
  }
}

export default useSignUp
