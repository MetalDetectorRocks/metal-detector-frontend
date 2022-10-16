import Axios from 'axios'
import { PathLike } from 'fs'
import qs from 'qs'

export default Axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true,
  timeout: 60000,
  headers: {
    'Cache-Control': 'no-cache, no-index, must-revalidate',
    Pragma: 'no-cache',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  paramsSerializer: (params: PathLike) => qs.stringify(params, { indices: false }),
})
