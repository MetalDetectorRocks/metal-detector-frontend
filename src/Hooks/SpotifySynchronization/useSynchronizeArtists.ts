import useApiWithToken from '../Auth/useApiWithToken'
import { useMutation } from 'react-query'
import { REST_ROUTES } from '../../Router/RestRoutes'
import { AxiosError } from 'axios'
import { ErrorResponse } from '../../Api/Model/Common/ErrorResponse'
import { SpotifySynchronizeArtistsResponse } from '../../Api/Model/Artist/SpotifySynchronizeArtistsResponse'

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

  return {
    synchronizeArtists: mutation.mutate,
    artistsCount: mutation.data,
    isLoading: mutation.isLoading,
    errorMsg:
      (mutation.error as AxiosError<ErrorResponse>)?.response?.data?.messages[0] ||
      (mutation.error as AxiosError<ErrorResponse>)?.message,
  }
}

export default useSynchronizeArtists
