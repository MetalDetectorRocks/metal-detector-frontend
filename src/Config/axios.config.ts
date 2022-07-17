import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { PathLike } from 'fs'
import qs from 'qs'
import { login } from '../Router/RestRoutes'
import { configure } from 'axios-hooks'

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
    paramsSerializer: (params: PathLike) => qs.stringify(params, { indices: false }),
  })

  axios.interceptors.request.use(async (config: AxiosRequestConfig) => {
    // ToDo: only protected pages need csrf
    if (config.url != login.path) {
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
