import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { AxiosError, AxiosResponse } from 'axios'
import axios from '../Config/axios.config'
import { MY_ARTISTS } from '../Config/endpoints.config'

export const MyArtists = () => {
  const [cookies, ,] = useCookies(['Authorization'])

  useEffect(() => {
    const fetchData = async () => {
      return await axios.get(MY_ARTISTS, {
        headers: { Authorization: cookies.Authorization },
      })
    }
    fetchData()
      .then((response: AxiosResponse) => {
        console.log(`success: ${JSON.stringify(response.data)}`)
      })
      .catch((error: AxiosError) => {
        console.log(`error: ${JSON.stringify(error.response?.data)}`)
      })
  }, [])

  return <h2>MyArtists</h2>
}
