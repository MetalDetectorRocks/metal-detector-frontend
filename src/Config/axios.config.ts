import Axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import {PathLike} from 'fs'
import qs from 'qs'

const axios = Axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: false,
  timeout: 60000,
  headers: {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    Pragma: 'no-cache',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  paramsSerializer: (params: PathLike) => qs.stringify(params, {indices: false}),
})

axios.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const csrfToken = await Axios.get('http://localhost:8080/rest/v1/csrf').then(
    (response: AxiosResponse) => response.data.token,
  )
  config.headers!['X-CSRF-TOKEN'] = csrfToken
  return config
})

export default axios
