import { useEffect, useState } from 'react'
import useRefreshToken from '../../Hooks/Auth/useRefreshToken'
import { useAuthContext } from '@/Context/AuthContext'
import LoadingSpinner from '../Common/LoadingSpinner'
import { Outlet } from 'react-router-dom'
import { API } from '@/Api/Axios'
import { REST_ROUTES } from '@/Router/RestRoutes'
import { AuthenticationResponse } from '@/Api/Model/Auth/AuthenticationResponse'

const PersistentLogin = () => {
  const [isLoading, setIsLoading] = useState(true)
  const refreshToken = useRefreshToken()
  const { ctx } = useAuthContext()

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        const authResponse = await API.get<AuthenticationResponse>(REST_ROUTES.authenticated)
        if (authResponse.data.authenticated) {
          await refreshToken()
        }
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    !ctx?.accessToken ? verifyRefreshToken() : setIsLoading(false)
  }, [])

  return <>{isLoading ? <LoadingSpinner /> : <Outlet />}</>
}

export default PersistentLogin
