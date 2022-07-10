import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { AxiosError, AxiosResponse } from 'axios'
import axios from '../Config/axios.config'
import { myArtists } from '../Router/RestRoutes'

export const MyArtists = () => {
  const [cookies, ,] = useCookies(['Authorization'])

  useEffect(() => {
    const fetchData = async () => {
      return await axios.get(myArtists.path, {
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

  return <h1>MyArtists</h1>
}
