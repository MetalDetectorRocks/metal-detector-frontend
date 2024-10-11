import Axios from 'axios'

const BASE_URL = import.meta.env.VITE_BACKEND_URL
const TIMEOUT = 60000
const HEADERS = {
  'Cache-Control': 'no-cache, no-index, must-revalidate',
  Pragma: 'no-cache',
  'Content-Type': 'application/json',
  Accept: 'application/json',
}
const paramsSerializer = {
  serialize: (params: Record<string, any>) => {
    const pairs: string[] = []

    Object.entries(params).forEach(([key, value]) => {
      let encodedValue

      if (Array.isArray(value)) {
        encodedValue = value.map((v) => encodeURIComponent(String(v))).join(',')
      } else if (value === null || value === undefined) {
        encodedValue = ''
      } else {
        encodedValue = encodeURIComponent(String(value))
      }

      pairs.push(`${encodeURIComponent(key)}=${encodedValue}`)
    })

    return pairs.join('&')
  },
}

export const API = Axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
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
