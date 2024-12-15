import { useState } from 'react'
import { SignInRequest } from '@/Api/Model/Auth/SignInRequest'
import { REST_ROUTES } from '@/Router/RestRoutes'
import { AxiosError } from 'axios'
import { useAuthContext } from '@/Context/AuthContext'
import { SignInResponse } from '@/Api/Model/Auth/SignInResponse'
import { home } from '@/Router/InternalRoutes'
import { useLocation, useNavigate } from 'react-router'
import { User } from '@/Api/Model/User/User'
import { API } from '@/Api/Axios'
import { ErrorResponse } from '@/Api/Model/Common/ErrorResponse'

const useSignIn = () => {
  const { setCtx } = useAuthContext()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || home.path

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMsg, setErrorMsg] = useState<string>('')

  const signInHandler = (request: SignInRequest) => {
    setIsLoading(true)
    API.post<SignInResponse>(REST_ROUTES.signIn, request)
      .then((response) => {
        const signInResponse = response.data
        setCtx({
          user: new User(signInResponse.username, signInResponse.roles),
          accessToken: signInResponse.accessToken,
        })
        navigate(from, { replace: true })
      })
      .catch((error: AxiosError<ErrorResponse>) => {
        if (error.response?.status === 401) {
          setErrorMsg('The credentials are invalid or the account is temporarily or permanently deactivated.')
        } else {
          const responseMessage = error.response?.data?.messages[0] || error.message
          setErrorMsg(responseMessage)
        }
      })
      .finally(() => setIsLoading(false))
  }
  return { isLoading, errorMsg, signInHandler }
}

export default useSignIn
