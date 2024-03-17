import useApiWithToken from '../Auth/useApiWithToken'
import { useMutation } from 'react-query'
import { REST_ROUTES } from '../../Router/RestRoutes'
import { AxiosError } from 'axios'
import { ErrorResponse } from '../../Api/Model/Common/ErrorResponse'
import { OAuth2AuthorizationResponse } from '../../Api/Model/Auth/OAuth2AuthorizationResponse'

const useFetchAuthorizationState = (registrationId: string) => {
  const API = useApiWithToken()

  const mutation = useMutation(async () => {
    return await API.get<OAuth2AuthorizationResponse>(`${REST_ROUTES.oAuthState}/${registrationId}`)
      .then((response) => {
        return response?.data?.exists || false
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
    errorMessage:
      (mutation.error as AxiosError<ErrorResponse>)?.response?.data?.messages[0] ||
      (mutation.error as AxiosError<ErrorResponse>)?.message,
  }
}

export default useFetchAuthorizationState
