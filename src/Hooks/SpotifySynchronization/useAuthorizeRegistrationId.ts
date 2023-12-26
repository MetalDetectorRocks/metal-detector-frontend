import useApiWithToken from '../Auth/useApiWithToken'
import { REST_ROUTES } from '../../Router/RestRoutes'
import { AxiosError } from 'axios'
import { ErrorResponse } from '../../Api/Model/Common/ErrorResponse'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const useAuthorizeRegistrationId = (registrationId: string) => {
  const API = useApiWithToken()
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: async () => {
      await API.post(`${REST_ROUTES.oAuthAuthorization}/${registrationId}`)
        .then((response) => {
          if (response.status === 302) {
            // window.location.href = response?.headers['Location']
            navigate(response?.headers['Location'])
            toast.success('Authorization successful')
          }
        })
        .catch((error: AxiosError<ErrorResponse>) => {
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
