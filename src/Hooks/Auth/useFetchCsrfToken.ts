import { API_WITH_TOKEN } from '@/Api/Axios'
import { REST_ROUTES } from '@/Router/RestRoutes'
import { CsrfTokenResponse } from '@/Api/Model/Auth/CsrfTokenResponse'

const useFetchCsrfToken = () => {
  return async () => {
    const response = await API_WITH_TOKEN.get<CsrfTokenResponse>(REST_ROUTES.csrf)
    return response.data.token
  }
}

export default useFetchCsrfToken
