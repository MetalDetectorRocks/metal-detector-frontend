import useApiWithToken from '../Auth/useApiWithToken'
import { useQuery } from 'react-query'
import { REST_ROUTES } from '../../Router/RestRoutes'
import { OAuth2AuthorizationResponse } from '../../Api/Model/Auth/OAuth2AuthorizationResponse'

const useFetchAuthorizationState = (registrationId: string) => {
  const API = useApiWithToken()
  const {
    isLoading,
    data: response,
    error,
  } = useQuery('oauth2-authorization-state', async () => {
    return await API.get<OAuth2AuthorizationResponse>(`${REST_ROUTES.oAuthState}/${registrationId}`)
  })
  return { authorizationExists: response?.data, isLoading, error }
}

export default useFetchAuthorizationState
