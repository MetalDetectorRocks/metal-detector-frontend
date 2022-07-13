import React, { useEffect, useState } from 'react'
import { AxiosError, AxiosResponse } from 'axios'
import axios from '../Config/axios.config'
import { myArtists } from '../Router/RestRoutes'
import Container from '@mui/material/Container'
import { useSearchParams } from 'react-router-dom'
import DefaultPagination from '../Components/Pagination/DefaultPagination'
import { MyArtistsResponse } from '../Api/responseTypes'
import ArtistGrid from '../Components/Grid/ArtistGrid'

export const MyArtists = () => {
  const [myArtistsResponse, setMyArtistsResponse] = useState<MyArtistsResponse | null>(null)
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const pageParam = searchParams.get('page') == null ? '1' : searchParams.get('page')
    const fetchData = async () => {
      return await axios.get(`${myArtists.path}?page=${pageParam}`)
    }
    fetchData()
      .then((response: AxiosResponse<MyArtistsResponse>) => {
        setMyArtistsResponse(response.data)
      })
      .catch((error: AxiosError) => {
        console.log(`error: ${JSON.stringify(error.response?.data)}`)
      })
  }, [searchParams])

  const handleOnChange = (event: React.ChangeEvent<unknown>, page: number) => {
    event.preventDefault()
    searchParams.set('page', page.toString())
    setSearchParams(searchParams)
  }

  return (
    <Container maxWidth={'lg'}>
      <h1>MyArtists</h1>
      <ArtistGrid artists={myArtistsResponse?.myArtists || []} />
      <DefaultPagination
        totalPages={myArtistsResponse?.pagination?.totalPages || 0}
        currentPage={myArtistsResponse?.pagination?.currentPage || 0}
        onChange={handleOnChange}
      />
    </Container>
  )
}
