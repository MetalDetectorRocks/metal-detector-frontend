import React, { useEffect, useState } from 'react'
import { AxiosError, AxiosResponse } from 'axios'
import axios from '../Config/axios.config'
import { myArtists } from '../Router/RestRoutes'
import { Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import { useSearchParams } from 'react-router-dom'
import DefaultPagination from '../Components/Pagination/DefaultPagination'
import { MyArtistsResponse } from '../Api/responseTypes'

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
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        direction={'row'}
        alignItems={'flex-start'}
        justifyContent={'flex-start'}
      >
        {myArtistsResponse?.myArtists.map((artist) => (
          <Grid item xs={3} key={myArtistsResponse?.myArtists.indexOf(artist)}>
            <Card variant={'outlined'}>
              <CardMedia component={'img'} alt={'artist image'} image={artist.mediumImage} />
              <CardHeader title={artist.artistName} />
              <CardContent>
                <Typography>Followed since {new Date(artist.followedSince).toLocaleDateString()}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <DefaultPagination
        totalPages={myArtistsResponse?.pagination.totalPages == null ? 0 : myArtistsResponse?.pagination.totalPages}
        onChange={handleOnChange}
      />
    </Container>
  )
}
