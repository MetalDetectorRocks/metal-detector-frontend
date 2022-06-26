import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { AxiosError, AxiosResponse } from 'axios'
import axios from '../Config/axios.config'

export const MyArtists = () => {
  const [cookies, ,] = useCookies(['Authorization'])

  useEffect(() => {
    const fetchData = async () => {
      return await axios.get('http://localhost:8080/rest/v1/my-artists', {
        headers: { Authorization: cookies.Authorization },
      })
    }
    fetchData()
      .then((response: AxiosResponse) => {
        console.log(`success: ${response.data}`)
      })
      .catch((error: AxiosError) => {
        console.log(`error: ${error.response?.data}`)
      })
  }, [])

  return <h2>MyArtists</h2>
}
