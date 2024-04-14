import useApiWithToken from '../Auth/useApiWithToken'
import { useMutation } from 'react-query'
import { REST_ROUTES } from '../../Router/RestRoutes'
import { AxiosError } from 'axios'
import { ErrorResponse } from '../../Api/Model/Common/ErrorResponse'
import { SpotifySynchronizeArtistsResponse } from '../../Api/Model/Artist/SpotifySynchronizeArtistsResponse'
import { SpotifyArtist } from '../../Api/Model/Artist/SpotifyArtist'

const useSynchronizeArtists = () => {
  const API = useApiWithToken()

  const mutation = useMutation(async (artistIds: string[]) => {
    return await API.post<SpotifySynchronizeArtistsResponse>(
      REST_ROUTES.spotifySynchronization,
      JSON.stringify({ artistIds: artistIds }),
    )
      .then((response) => {
        return response?.data?.artistsCount || 0
      })
      .catch(() => {
        return 0
      })
  })

  const synchronizeArtists = async (artistIds: SpotifyArtist[]) => {
    return new Promise<number>((resolve, reject) => {
      mutation.mutate(
        artistIds.map((artist) => artist.id),
        {
          onSuccess: (data) => resolve(data),
          onError: (error) => reject(error),
        },
      )
    })
  }

  return {
    synchronizeArtists,
    isLoading: mutation.isLoading,
    errorMessage:
      (mutation.error as AxiosError<ErrorResponse>)?.response?.data?.messages[0] ||
      (mutation.error as AxiosError<ErrorResponse>)?.message,
  }
}

export default useSynchronizeArtists
