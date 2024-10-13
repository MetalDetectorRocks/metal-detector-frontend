import useApiWithToken from '../Auth/useApiWithToken'
import { useMutation } from '@tanstack/react-query'
import { REST_ROUTES } from '@/Router/RestRoutes'
import { AxiosError } from 'axios'
import { ErrorResponse } from '@/Api/Model/Common/ErrorResponse'
import { SpotifySynchronizeArtistsResponse } from '@/Api/Model/Artist/SpotifySynchronizeArtistsResponse'

const useSynchronizeArtists = () => {
  const API = useApiWithToken()

  const mutation = useMutation({
    mutationFn: async () => {
      return await API.post<SpotifySynchronizeArtistsResponse>(REST_ROUTES.spotifySynchronization)
        .then((response) => {
          return response?.data?.artistNames || []
        })
        .catch(() => {
          return []
        })
    },
  })

  const synchronizeArtists = async () => {
    return new Promise<string[]>((resolve, reject) => {
      mutation.mutate(undefined, {
        onSuccess: (data) => resolve(data),
        onError: (error) => reject(error),
      })
    })
  }

  return {
    synchronizeArtists,
    isLoading: mutation.isPending,
    errorMessage:
      (mutation.error as AxiosError<ErrorResponse>)?.response?.data?.messages[0] ||
      (mutation.error as AxiosError<ErrorResponse>)?.message,
  }
}

export default useSynchronizeArtists
