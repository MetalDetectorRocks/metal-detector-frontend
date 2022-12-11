import useRefreshToken from './useRefreshToken'
import { useEffect } from 'react'
import { useAuthContext } from '../../Context/AuthContext'
import { API_WITH_TOKEN } from '../../Api/Axios'
// import useFetchCsrfToken from './useFetchCsrfToken'

const useApiWithToken = () => {
  // const fetchCsrfToken = useFetchCsrfToken()
  const refreshToken = useRefreshToken()
  const { ctx } = useAuthContext()

  useEffect(() => {
    // const addCsrfTokenInterceptor = API_WITH_TOKEN.interceptors.request.use(
    //   async (config) => {
    //     config.headers!['X-CSRF-TOKEN'] = await fetchCsrfToken()
    //     return config
    //   },
    //   (error) => Promise.reject(error),
    // )

    const addAccessTokenInterceptor = API_WITH_TOKEN.interceptors.request.use(
      (config) => {
        const headers = config.headers!
        if (!headers['Authorization']) {
          headers['Authorization'] = `Bearer ${ctx?.accessToken}`
        }
        return config
      },
      (error) => Promise.reject(error),
    )

    const refreshAccessTokenInterceptor = API_WITH_TOKEN.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config
        const shouldRefreshToken = error?.response?.status === 401 && !prevRequest?.sent

        prevRequest.sent = true
        if (!shouldRefreshToken) {
          return Promise.reject(error)
        }

        const newAccessToken = await refreshToken()
        prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
        return API_WITH_TOKEN(prevRequest)
      },
    )

    return () => {
      // API_WITH_TOKEN.interceptors.request.eject(addCsrfTokenInterceptor) // TODO DanielW: enable csrf
      API_WITH_TOKEN.interceptors.request.eject(addAccessTokenInterceptor)
      API_WITH_TOKEN.interceptors.response.eject(refreshAccessTokenInterceptor)
    }
  }, [ctx, refreshToken])

  return API_WITH_TOKEN
}

// TODO DanielW: Handle expiration of refresh token

export default useApiWithToken
