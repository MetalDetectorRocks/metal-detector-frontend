import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { configure } from 'axios-hooks'
import { REST_ROUTES } from '../Router/RestRoutes'

const configureAxios = () => {
  const axios = Axios.create({
    baseURL: 'http://localhost:8080', // ToDo: parameterize base url
    withCredentials: true,
    timeout: 60000,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })

  axios.interceptors.request.use(async (config: AxiosRequestConfig) => {
    // ToDo: only protected pages need csrf
    if (config.url != REST_ROUTES.signIn) {
      // ToDo: somehow don't use Axios (but axios)?
      config.headers!['X-CSRF-TOKEN'] = await Axios.get('http://localhost:8080/rest/v1/csrf').then(
        (response: AxiosResponse) => response.data.token,
      )
    }
    return config
  })

  configure({ axios: axios, cache: false })
}

export default configureAxios
