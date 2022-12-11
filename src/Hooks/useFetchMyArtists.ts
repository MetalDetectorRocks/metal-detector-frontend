import { useEffect, useState } from 'react'
import useApiWithToken from './Auth/useApiWithToken'
import { MyArtistsResponse } from '../Api/Model/Artists/MyArtistsResponse'
import { REST_ROUTES } from '../Router/RestRoutes'
import { Artist } from '../Api/Model/Artists/Artist'
import { BackendPagination } from '../Api/Model/BackendPagination'

export type FetchMyArtistsProps = {
  page: number
}

// TODO DanielW: Integration axios hooks here
const fetchMyArtists = (props: FetchMyArtistsProps) => {
  const API = useApiWithToken()
  const [artists, setArtists] = useState<Artist[]>()
  const [pagination, setPagination] = useState<BackendPagination>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    API.get<MyArtistsResponse>(REST_ROUTES.myArtists, {
      params: {
        page: props.page,
      },
    })
      .then((response) => {
        setArtists(response.data.myArtists)
        setPagination(response.data.pagination)
      })
      .catch((error) => {
        console.error(error)
        setError(true)
      })
      .finally(() => setIsLoading(false))
  }, [])

  return { artists, pagination, isLoading, error }
}

export default fetchMyArtists
