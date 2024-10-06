import useApiWithToken from '../Auth/useApiWithToken'
import { REST_ROUTES } from '../../Router/RestRoutes'
import { useMutation } from 'react-query'
import { SpotifyFetchArtistsResponse } from '../../Api/Model/Artist/SpotifyFetchArtistsResponse'
import { SpotifyArtist } from '../../Api/Model/Artist/SpotifyArtist'
import { AxiosError } from 'axios'
import { ErrorResponse } from '../../Api/Model/Common/ErrorResponse'

const useFetchSpotifyArtists = () => {
  const API = useApiWithToken()
  const mutation = useMutation('spotify-artists', async () => {
    return await API.get<SpotifyFetchArtistsResponse>(REST_ROUTES.spotifyArtists, {
      params: {
        fetchTypes: ['ALBUMS', 'ARTISTS'],
      },
    })
      .then((response) => {
        return response?.data?.artists || []
      })
      .catch(() => {
        return []
      })
  })

  const fetchSpotifyArtists = async () => {
    return new Promise<SpotifyArtist[]>((resolve, reject) => {
      mutation.mutate(undefined, {
        onSuccess: (data) => resolve(data),
        onError: (error) => reject(error),
      })
    })
  }

  return {
    fetchSpotifyArtists,
    isLoading: mutation.isLoading,
    errorMessage:
      (mutation.error as AxiosError<ErrorResponse>)?.response?.data?.messages[0] ||
      (mutation.error as AxiosError<ErrorResponse>)?.message,
  }
}

export default useFetchSpotifyArtists
