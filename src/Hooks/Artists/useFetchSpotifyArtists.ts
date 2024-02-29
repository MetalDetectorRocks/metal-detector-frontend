import useApiWithToken from '../Auth/useApiWithToken'
import { REST_ROUTES } from '../../Router/RestRoutes'
import { useMutation } from 'react-query'
import { SpotifyFetchArtistsResponse } from '../../Api/Model/Artist/SpotifyFetchArtistsResponse'

const useFetchSpotifyArtists = () => {
  const API = useApiWithToken()
  const mutation = useMutation('spotify-artists', async () => {
    return await API.get<SpotifyFetchArtistsResponse>(REST_ROUTES.spotifyArtists, {
      params: {
        fetchTypes: ['ALBUMS', 'ARTISTS'],
      },
    })
  })

  return {
    artists: mutation.data?.data.artists,
    fetchSpotifyArtists: mutation.mutate,
    isLoadingFetchArtists: mutation.isLoading,
    errorFetchArtists: mutation.error,
  }
}

export default useFetchSpotifyArtists
