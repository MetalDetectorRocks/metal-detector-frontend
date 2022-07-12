import React, { useEffect, useState } from 'react'
import { AxiosError, AxiosResponse } from 'axios'
import axios from '../Config/axios.config'
import { myArtists } from '../Router/RestRoutes'
import { Card, CardHeader, CardMedia, Grid, Pagination } from '@mui/material'
import Container from '@mui/material/Container'
import { useSearchParams } from 'react-router-dom'

export interface MyArtistsResponse {
  readonly myArtists: Artist[]
  readonly pagination: BackendPagination
}

export interface Artist {
  readonly externalId: string
  readonly artistName: string
  readonly thumbnailImage: string
  readonly smallImage: string
  readonly mediumImage: string
  readonly largeImage: string
  readonly followedSince: string
  readonly source: string
  readonly follower: number
}

export interface BackendPagination {
  readonly currentPage: number
  readonly itemsPerPage: number
  readonly totalPages: number
}

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
      <div>
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
                <CardHeader title={artist.artistName} subheader={`followed since : ${artist.followedSince}`} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <div>
        {myArtistsResponse?.pagination && myArtistsResponse.pagination.totalPages > 0 ? (
          <Pagination
            count={myArtistsResponse.pagination.totalPages}
            showFirstButton
            showLastButton
            boundaryCount={2}
            onChange={handleOnChange}
          />
        ) : (
          ''
        )}
      </div>
    </Container>
  )
}
