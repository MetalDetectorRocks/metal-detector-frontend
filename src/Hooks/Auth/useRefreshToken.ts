import { API_WITH_TOKEN } from '../../Api/Axios'
import { REST_ROUTES } from '../../Router/RestRoutes'
import { useAuthContext } from '../../Context/AuthContext'
import { AccessTokenResponse } from '../../Api/Model/Auth/AccessTokenResponse'

const useRefreshToken = () => {
  const { ctx, setCtx } = useAuthContext()

  return async () => {
    const response = await API_WITH_TOKEN.get<AccessTokenResponse>(REST_ROUTES.refresh)
    setCtx({ ...ctx, accessToken: response.data.accessToken })
    return response.data.accessToken
  }
}

export default useRefreshToken
