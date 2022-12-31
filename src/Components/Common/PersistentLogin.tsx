import { useEffect, useState } from 'react'
import useRefreshToken from '../../Hooks/Auth/useRefreshToken'
import { useAuthContext } from '../../Context/AuthContext'
import LoadingSpinner from './LoadingSpinner'
import { Outlet } from 'react-router-dom'

const PersistentLogin = () => {
  const [isLoading, setIsLoading] = useState(true)
  const refreshToken = useRefreshToken()
  const { ctx } = useAuthContext()

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refreshToken()
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
