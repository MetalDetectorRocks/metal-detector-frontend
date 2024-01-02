import useApiWithToken from '../Auth/useApiWithToken'
import { REST_ROUTES } from '../../Router/RestRoutes'
import { AxiosError } from 'axios'
import { ErrorResponse } from '../../Api/Model/Common/ErrorResponse'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'

export interface AuthorizeRegistrationIdRequest {
  code: string
  state: string
}

const useAuthorizeRegistrationId = () => {
  const API = useApiWithToken()

  const mutation = useMutation({
    mutationFn: async (request: AuthorizeRegistrationIdRequest) => {
      await API.post(`${REST_ROUTES.oAuthState}/callback`, { code: request.code, state: request.state })
        .then((response) => {
          console.log(`status: ${response.status}`)
          toast.success('Authorization successful')
        })
        .catch((error: AxiosError) => {
          console.log(`status: ${error.status}`)
          console.log(`message: ${error.message}`)
          toast.error(`Authorization failed: ${error.message}`)
        })
    },
  })

  return {
    authorizeRegistrationId: mutation.mutate,
    errorMsg:
      (mutation.error as AxiosError<ErrorResponse>)?.response?.data?.messages[0] ||
      (mutation.error as AxiosError<ErrorResponse>)?.message,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
  }
}

export default useAuthorizeRegistrationId
