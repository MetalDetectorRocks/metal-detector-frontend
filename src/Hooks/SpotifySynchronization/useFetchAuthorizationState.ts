import useApiWithToken from '../Auth/useApiWithToken'
import { useMutation } from 'react-query'
import { REST_ROUTES } from '../../Router/RestRoutes'
import { AxiosError, AxiosResponse } from 'axios'
import { ErrorResponse } from '../../Api/Model/Common/ErrorResponse'

const useFetchAuthorizationState = (registrationId: string) => {
  const API = useApiWithToken()

  const mutation = useMutation(async () => {
    return await API.get<boolean>(`${REST_ROUTES.oAuthState}/${registrationId}`)
      .then((response: AxiosResponse) => {
        return response.status === 200
      })
      .catch(() => {
        return false
      })
  })

  const fetchAuthorization = async () => {
    return new Promise<boolean>((resolve, reject) => {
      mutation.mutate(undefined, {
        onSuccess: (data) => resolve(data),
        onError: (error) => reject(error),
      })
    })
  }

  return {
    fetchAuthorization,
    isLoading: mutation.isLoading,
    errorMsg:
      (mutation.error as AxiosError<ErrorResponse>)?.response?.data?.messages[0] ||
      (mutation.error as AxiosError<ErrorResponse>)?.message,
  }
}

export default useFetchAuthorizationState
