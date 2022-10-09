import { useState } from 'react'
import { SignInRequest } from '../Api/Model/Request/SignInRequest'
import { REST_ROUTES } from '../Router/RestRoutes'
import { AxiosError } from 'axios'
import { ErrorResponse } from '../Api/responseTypes'
import API from '../Api/Axios'
import { useAuthContext } from '../Context/AuthContext'
import { SignInResponse } from '../Api/Model/Response/SignInResponse'
import { home } from '../Router/InternalRoutes'
import { useNavigate } from 'react-router-dom'

const useSignIn = () => {
  const { setCtx } = useAuthContext()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errorMsg, setErrorMsg] = useState<string>('')

  const signInHandler = (request: SignInRequest) => {
    setIsLoading(true)
    API.post<SignInResponse>(REST_ROUTES.signIn, request)
      .then((response) => {
        const signInResponse = response.data
        setCtx({
          user: {
            username: signInResponse.username,
            roles: signInResponse.roles,
          },
          accessToken: signInResponse.token,
        })
        navigate(home.path)
      })
      .catch((error: AxiosError<ErrorResponse>) => {
        const responseMessage = error.response?.data?.messages[0] || error.message
        setErrorMsg(responseMessage)
      })
      .finally(() => setIsLoading(false))
  }
  return { isLoading, errorMsg, signInHandler }
}

export default useSignIn
