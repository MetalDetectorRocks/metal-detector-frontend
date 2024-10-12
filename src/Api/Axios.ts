import Axios from 'axios'
import paramsSerializer from '@/Api/paramsSerializer'

const BASE_URL = import.meta.env.VITE_BACKEND_URL
const TIMEOUT = 60000
const HEADERS = {
  'Cache-Control': 'no-cache, no-index, must-revalidate',
  Pragma: 'no-cache',
  'Content-Type': 'application/json',
  Accept: 'application/json',
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
