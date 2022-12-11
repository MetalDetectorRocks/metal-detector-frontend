import Axios from 'axios'
import qs from 'qs'

const BASE_URL = process.env.REACT_APP_BACKEND_URL
const TIMEOUT = 60000
const HEADERS = {
  'Cache-Control': 'no-cache, no-index, must-revalidate',
  Pragma: 'no-cache',
  'Content-Type': 'application/json',
  Accept: 'application/json',
}
const paramsSerializer = {
  serialize: (params: Record<string, any>) => qs.stringify(params, { indices: false }),
}

export const API = Axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: HEADERS,
  paramsSerializer,
})

export const API_WITH_TOKEN = Axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  timeout: TIMEOUT,
  headers: HEADERS,
  paramsSerializer,
})
