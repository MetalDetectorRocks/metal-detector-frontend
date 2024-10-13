import { API_WITH_TOKEN } from '@/Api/Axios'
import { REST_ROUTES } from '@/Router/RestRoutes'
import { useAuthContext } from '@/Context/AuthContext'
import { SignInResponse } from '@/Api/Model/Auth/SignInResponse'
import { User } from '@/Api/Model/User/User'

const useRefreshToken = () => {
  const { setCtx } = useAuthContext()

  return async () => {
    const response = await API_WITH_TOKEN.get<SignInResponse>(REST_ROUTES.refresh)
    const user = new User(response.data.username, response.data.roles)
    setCtx({ user, accessToken: response.data.accessToken })
    return response.data.accessToken
  }
}

export default useRefreshToken
